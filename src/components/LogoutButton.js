import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { logout } from "../store/userSlice"

function LogoutButton() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logOut = () => {
        dispatch(logout())
        localStorage.removeItem('user')
        navigate('/login')
    }

    return (
        <div>
            <button className="logoutbutton" onClick={logOut}>Log out</button>
        </div>
    )
}

export default LogoutButton