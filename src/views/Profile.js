import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();
    useEffect(() => {
        // TODO check if authenticated, else navigate to '/login'.
        //navigate('/login');
    }, [])
    
    return (
        <h1>Profile</h1>
    )
}

export default Profile;