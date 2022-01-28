import '../styles/Title.css'
import LogoutButton from '../components/LogoutButton'
import { useSelector } from 'react-redux'

function Title(props) {

    const content = props.content
    const userInfo = useSelector((state) => state.user)

    const getuser = () => {console.log(userInfo.user)
    }
    

    if (props.showProfile === "true") {
        return (
            <div className='titlecontainer'>
                <div className='spancontainer'>
                    <span className='title'>{content}</span>
                    <button onClick={ getuser }>get user info</button>
                </div>
                <div><LogoutButton /></div>
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