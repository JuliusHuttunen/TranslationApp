import '../styles/Header.css'
import helloLogo from '../resources/Logo-Hello.png'

function Header() {
    return (
        <div className="container">
            <div className="logo">
                <span>Lost in translation</span>
                <img src={helloLogo}></img>
            </div>
            <div className="contributor">
                <span><a href="https://github.com/JuliusHuttunen">@JuliusHuttunen</a></span>
                <span><a href="https://github.com/Azruim">@Azruim</a></span>
            </div>
        </div>
    )
}

export default Header