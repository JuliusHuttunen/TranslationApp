import { useState } from "react"
import "../App.css"

function UserForm() {

    const [userName, setUserName] = useState("")
    const handleInputChange = (event) => {
        setUserName(event.target.value)
    }

    const handleClick = () => {
        //TODO: handle login/register
        console.log(userName)
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