import { useState } from "react"
import "../App.css"
import { getUserFromAPI } from "./API/UserAPI"
import { useNavigate } from "react-router-dom"
import { login } from "../store/userSlice"
import { useDispatch } from 'react-redux'

function UserForm() {

    const navigate = useNavigate();
    const [userName, setUserName] = useState("")
    const dispatch = useDispatch()

    const handleInputChange = (event) => {
        setUserName(event.target.value)
    }

    const handleUser = async () => {
        const [error, user] = await getUserFromAPI(userName)
        console.log("ERR", error)
        console.log("USER", user)
        localStorage.setItem('user', JSON.stringify(user))
        dispatch(login(user))
    } 

    const handleClick = async () => {
        await handleUser()
        navigate('/')
    }


    return (
        <div className="form">
            <label className="usernamelabel">Username</label>
            <input className="usernameinput" type="text" placeholder="What's your name?" onChange={handleInputChange} value={userName}></input>
            <button className="usernamebutton" onClick={handleClick}>Confirm</button>
        </div>
    )
}

export default UserForm