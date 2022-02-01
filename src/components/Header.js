import '../styles/Header.css'
import helloLogo from '../resources/Logo-Hello.png'
import { useNavigate } from 'react-router-dom'

function Header() {

    const navigate = useNavigate()

    const navigateToTranslator = () => {
        navigate('/')
    }
    
    return (
        <div className="container">
            <div className="logo" onClick={navigateToTranslator}>
                <span>Lost in translation</span>
                <img src={helloLogo}></img>
            </div>
            <div className="contributor">
                <span><a href="https://github.com/JuliusHuttunen">@JuliusHuttunen</a></span>
                <span><a href="https://github.com/Azruim">@Azruim (Nico Behnen)</a></span>
            </div>
        </div>
    )
}

export default Header