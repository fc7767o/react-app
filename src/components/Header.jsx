import { Link } from "react-router-dom"
import { useTheme } from "../context/ThemeContext";

function Header(){
    const {theme, toggleTheme } = useTheme();
    return (
        <header className="header">
            <h1>˚₊‧꒰ა Social Network ໒꒱‧₊</h1>
            <p>My page with i create</p>
            <nav>
                <Link to="/home">Главная </Link>
                <Link to="/profile">Профиль </Link>
                <Link to="/settings">Настройки </Link>
                <Link to="/info">О проекте</Link>
                <button className="button-theme" onClick={toggleTheme}>
                    {theme === "light" ? "dark" : "light"}
                </button>
            </nav>
        </header>
    )
}

export default Header;