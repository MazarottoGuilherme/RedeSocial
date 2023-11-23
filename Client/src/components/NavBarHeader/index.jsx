import { Link } from "react-router-dom"
import "./NavBarHeader.css";

const NavBarHeader = () => {
    return <header>
        <nav className="navigationHeader">
            <h1>Rede Social</h1>
            <ul className="lista-link">
                <li>
                    <Link className="header-link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="header-link" to="/projects">Projetos</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default NavBarHeader;