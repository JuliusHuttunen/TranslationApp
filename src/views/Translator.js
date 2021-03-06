import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { logout, login, addTranslation } from "../store/userSlice"
import Title from '../components/Title'
import LogoutButton from '../components/LogoutButton'
import Signs from "../components/Signs";
import '../App.css'
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
            navigate('/login')
        }
        else {
            dispatch(login(sessionUser))
        }
    }

    const translate = async () => {
        setTranslationString(inputString);   
        const translations = [...userInfo.translations];
        const translationObject = {string: inputString, deleted: false, id: translations.length};
        translations.push(translationObject);
        dispatch(addTranslation(translationObject));
        localStorage.setItem('user', JSON.stringify({
            username: userInfo.username,
            translations: [...userInfo.translations, translationObject],
            id: userInfo.id
        }))
        await updateTranslationsApi(userInfo.id, translations);
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
                <Title content="Translator" showProfile="true" />
            </div>
            <div className="translatorwrapper">
                <div className="translatorlabelwrapper">
                    <span className="translatorinputlabel">Input</span>
                    <div className="translatorinputwrapper">
                        <input type="text" onChange={handleInputChange} className="translatorinput" placeholder="Translate..."></input>
                        <button onClick={translate} className="translatorbutton">Run</button>
                    </div>
                </div>
                <div className="signswrapper">
                    <div className="signsbackdrop">
                        <div className="signs">
                        <Signs string={translationString} />
                        </div>
                        <div className="translatoroutputbackdrop">
                            <span className="translatoroutput">Output</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Translator;