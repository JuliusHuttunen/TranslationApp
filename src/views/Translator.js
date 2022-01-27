import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Translator () {
    const navigate = useNavigate();
    useEffect(() => {
        // TODO check if authenticated, else navigate to '/login'.
        //navigate('/login');
    }, [])

    return (
        <h1>Translator</h1>
    )
}

export default Translator;