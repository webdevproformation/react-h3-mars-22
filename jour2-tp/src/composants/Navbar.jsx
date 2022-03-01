import { Link } from "react-router-dom"

export const Navbar = () => <nav className="navbar navbar-expand bg-dark navbar-dark px-4">
    <ul className="navbar-nav">
        <li className="nav-item">
            <Link to="/" className="nav-link">Page 1</Link>
        </li>
        <li className="nav-item">
            <Link to="/page/2" className="nav-link">Page 2</Link>
        </li>
    </ul>
</nav>