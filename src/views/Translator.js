import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { logout } from "../store/userSlice"
import Title from '../components/Title'
import LogoutButton from '../components/LogoutButton'

function Translator() {

    const localStorageValue = localStorage.getItem('user')
    const sessionUser = JSON.parse(localStorageValue)
    const userInfo = useSelector((state) => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const checkCredentials = (navigate) => {
        if (sessionUser === null || userInfo.user === undefined) {
            console.log("Redirect to login.")
            navigate('/login')
        }
    }

    useEffect(() => {
        checkCredentials(navigate)
    }, [])

    return (
        <div>
            <Title content="Translator" showProfile="true"/>
            <h1>Translator</h1>
            <button onClick={checkCredentials}>Check credentials</button>
        </div>
    )
}

export default Translator;