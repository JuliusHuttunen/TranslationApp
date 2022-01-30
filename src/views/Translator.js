import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { logout } from "../store/userSlice"
import Title from '../components/Title'
import LogoutButton from '../components/LogoutButton'
import Signs from "../components/Signs";

function Translator() {

    const localStorageValue = localStorage.getItem('user')
    const sessionUser = JSON.parse(localStorageValue)
    const userInfo = useSelector((state) => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [translationString, setTranslationString] = useState("");
    const [inputString, setInputString] = useState("");


    const checkCredentials = (navigate) => {
        if (sessionUser === null || userInfo.user === undefined) {  
            console.log("Redirect to login.")
            navigate('/login')
        }
    }

    const translate = () => {
        setTranslationString(inputString)
    }

    const handleInputChange = (event) => {
        setInputString(event.target.value);
    }

    useEffect(() => {
        checkCredentials(navigate)
    }, [])

    return (
        <>
        <div>
            <Title content="Translator" showProfile="true"/>
            <h1>Translator</h1>
            <button onClick={checkCredentials}>Check credentials</button>
        </div>
        <div>
            <input type="text" onChange={handleInputChange}></input>
            <button onClick={translate}>Translate</button>
            <Signs string={translationString}/>
        </div>
        </>
    )
}

export default Translator;