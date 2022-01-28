import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const localStorageValue = localStorage.getItem('user')
const sessionUser = JSON.parse(localStorageValue)

const checkCredentials = () => {
    console.log(sessionUser)
}

function Translator() {
    const navigate = useNavigate();
    useEffect(() => {
        // TODO check if authenticated, else navigate to '/login'.
        //navigate('/login');
    }, [])

    return (
        <div>
            <h1>Translator</h1>
            <button onClick={checkCredentials}>Check credentials</button>
        </div>
    )
}

export default Translator;