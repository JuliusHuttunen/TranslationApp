import { useState } from "react"
import "../App.css"
import userStore from "../store/UserStore"
import { useNavigate } from "react-router-dom";

function UserForm() {

    const navigate = useNavigate();
    const [userName, setUserName] = useState("")
    const handleInputChange = (event) => {
        setUserName(event.target.value)
    }

    const handleClick = () => {
        //TODO: handle login/register
        console.log(userName)
        console.log(user)
        navigate('/');
    }
    const store = userStore() 
    store.dispatch({
        type: 'INITUSER'
    })
    const [user, setUser] = useState(store.getState())

    return (
        <div className="form">
            <label className="usernamelabel">Username</label>
            <input className="usernameinput" type="text" placeholder="What's your name?" onChange={handleInputChange} value={userName}></input>
            <button className="usernamebutton" onClick={handleClick}>Confirm</button>
            <p>{ user.username }</p>
        </div>
    )
}

export default UserForm