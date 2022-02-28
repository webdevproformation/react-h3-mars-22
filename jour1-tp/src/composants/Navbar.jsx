import { Link } from "react-router-dom" ;

export function Navbar (){
    return (
        <nav className="navbar navbar-expand bg-light navbar-light px-4">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Accueil</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}