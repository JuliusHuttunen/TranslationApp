import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { login } from "../store/userSlice"
import Title from "../components/Title";
import "../App.css"

function Profile() {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const localStorageValue = localStorage.getItem('user')
    const sessionUser = JSON.parse(localStorageValue)
    const userInfo = useSelector((state) => state.user)
    const translations = userInfo.translations

    const checkCredentials = () => {
        if (sessionUser === null) {
            console.log("Redirect to login.")
            navigate('/login')
        }
        else {
            dispatch(login(sessionUser))
        }
    }

    const translationList = translations.map((translation) => {
        return(
            <li>{translation.string}</li>
        )
    }
    )

    useEffect(() => {
        checkCredentials()
    }, [])
    
    return (
        <div>
            <Title content="Profile page" showProfile="true"/>
            <div className="listcontainer">
            <ol>
            <h3>Your translations</h3>
            {translationList}
            </ol>
            <div></div>
            </div>
        </div>
    )
}

export default Profile;