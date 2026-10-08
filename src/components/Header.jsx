import { Link } from "react-router-dom"

function Header(){
    return (
        <header className="header">
            <h1>˚₊‧꒰ა Social Network ໒꒱‧₊</h1>
            <p>My page with i create</p>
            <nav>
                <Link to="/home">Главная </Link>
                <Link to="/profile">Профиль </Link>
                <Link to="/settings">Настройки </Link>
                <Link to="/info">О проекте</Link>
            </nav>

        </header>
    )
}

export default Header;