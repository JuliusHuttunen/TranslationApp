import '../styles/Title.css'
import LogoutButton from '../components/LogoutButton'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'

function Title(props) {

    const content = props.content
    const userInfo = useSelector((state) => state.user)
    const navigate = useNavigate()

    const getuser = () => {
        console.log(userInfo.user)
    }

    const toProfile = () => {
        navigate('/profile')
    }


    if (props.showProfile === "true") {
        return (
            <div className='titlecontainer'>
                <div className='spancontainer'>
                    <span className='title'>{content}</span>
                    <button onClick={getuser}>get user info</button>
                </div>
                <div className='profiletitlewrapper'><span onClick={toProfile} className='profiletitle'>You are logged in as {userInfo.user.username}.</span>
                <LogoutButton />
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='titlecontainer'>
                <div className='spancontainer'>
                    <span className='title'>{content}</span>
                </div>
                <div></div>
            </div>
        )
    }
}

export default Title