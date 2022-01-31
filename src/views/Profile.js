import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { login } from "../store/userSlice"
import Title from "../components/Title";
import DeleteButton from "../components/DeleteButton";
import "../App.css"

function Profile() {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const localStorageValue = localStorage.getItem('user')
    const sessionUser = JSON.parse(localStorageValue)
    const userInfo = useSelector((state) => state.user)
    const translations = userInfo.translations
    const translationsCopy = [...translations]
    const reverseTranslations = translationsCopy.reverse()

    const checkCredentials = () => {
        if (sessionUser === null) {
            console.log("Redirect to login.")
            navigate('/login')
        }
        else {
            dispatch(login(sessionUser))
        }
    }

    const translationList = reverseTranslations.slice(0, 10).map((translation, index) => {
        return (
            <div key={index}>
                <li>{translation.string}</li>
            </div>
        )
    }
    )

    useEffect(() => {
        checkCredentials()
    }, [])

    return (
        <div>
            <Title content="Profile page" showProfile="true" />
            <div className="listcontainer">
                <ol>
                    <h3>Previous translations</h3>
                    {translationList}
                </ol>
                <div>
                    <DeleteButton strings={reverseTranslations.slice(0, 10)}/>
                </div>
            </div>
        </div>
    )
}

export default Profile;