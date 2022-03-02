import { Link } from "react-router-dom"
import { UserContext } from "../context/userContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

export const Navbar = () => {
    const { isLogged , dispatch } = useContext(UserContext);
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("profil") ; // suppression localstorage
        navigate("/connexion")
        dispatch({type : "LOGOUT" })
    }

    return <nav className="navbar navbar-expand bg-primary navbar-dark px-4">
        <Link to="/" className="navbar-brand">Mini CMS</Link>
        <ul className="navbar-nav me-auto">
            <li className="nav-item">
                <Link to="/" className="nav-link">Accueil</Link>
            </li>
        </ul>
        { isLogged ?  
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/admin" className="nav-link">Gérer les articles</Link>
            </li>
            <li className="nav-item">
                <button onClick={logout}>Déconnexion</button>
            </li>
        </ul>
        : 
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/connexion" className="nav-link">Connexion</Link>
            </li>
        </ul>
        
        }
        
        </nav>
}