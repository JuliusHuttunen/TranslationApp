import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { addTranslation } from "../store/userSlice"
import Title from '../components/Title'
import LogoutButton from '../components/LogoutButton'
import Signs from "../components/Signs";
import { updateTranslationsApi } from "../components/API/UserAPI";

function Translator() {
    

    const localStorageValue = localStorage.getItem('user')
    const sessionUser = JSON.parse(localStorageValue)
    const userInfo = useSelector((state) => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [translationString, setTranslationString] = useState("");
    const [inputString, setInputString] = useState("");


    const checkCredentials = (navigate) => {
        if (sessionUser === null) {  
            console.log("Redirect to login.")
            navigate('/login')
        }
    }

    const translate = async () => {
        setTranslationString(inputString);

        if (!checkForDuplicate(inputString))
            return;
            
        const translations = [...userInfo.translations];
        const translationObject = {string: inputString, deleted: false};
        translations.push(translationObject);

        dispatch(addTranslation(translationObject));
        await updateTranslationsApi(userInfo.id, translations);
    }

    const checkForDuplicate = (string) => {
        if (userInfo.translations.every( x => x.string !== string))
            return true;
        return false;
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