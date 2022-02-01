import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { login } from "../store/userSlice"
import Title from "../components/Title";
import DeleteButton from "../components/DeleteButton";
import "../App.css"
import Signs from "../components/Signs";

function Profile() {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const localStorageValue = localStorage.getItem('user')
    const sessionUser = JSON.parse(localStorageValue)
    const userInfo = useSelector((state) => state.user)
    const translations = userInfo.translations
    const translationsCopy = [...translations]
    const reverseTranslations = translationsCopy.reverse()
    let threshold = 0

    const checkCredentials = () => {
        if (sessionUser === null) {
            console.log("Redirect to login.")
            navigate('/login')
        }
        else {
            dispatch(login(sessionUser))
        }
    }

    const translationList = reverseTranslations.map((translation, index) => {
        if (!translation.deleted && threshold < 10) {
            threshold++
            return (
                <div key={index} className="profiletranslationwrapper">
                    <span>{threshold}. {translation.string}</span>
                    <div className="imgwrapper">
                        <Signs string={translation.string} />
                    </div>
                    <DeleteButton translations={[translation]}/>
                </div>
            )
        }
        else {
            return
        }
    }
    )


    useEffect(() => {
        checkCredentials()
    }, [])

    return (
        <div>
            <Title content="Profile page" showProfile="true" />
            <div className="profilepagebackdrop">
                <h3>Previous translations</h3>
                <div className="profilecontainer">
                    <div className="profilegridcontainer">
                        {translationList}
                    </div>
                    <div>
                      <DeleteButton strings={reverseTranslations.slice(0, 10)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;