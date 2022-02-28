import { Link } from "react-router-dom" ;
import { useContext } from "react"
import { DataContext } from "../context/dataContext"
import { UserContext } from "../context/userContext"; 

export function Navbar (){
    const { nom, age } = useContext( DataContext )
    const { nom : nomUser} = useContext(UserContext)
    return (
        <nav className="navbar navbar-expand bg-light navbar-light px-4">
            <span className="navbar-brand">{ nom } { age }</span>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Accueil</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact</Link>
                </li>
                <li className="nav-item">
                    <Link to="/articles" className="nav-link">Articles</Link>
                </li>
            </ul>
            <ul  className="navbar-nav ms-5">
                <li className="nav-item">{nomUser}</li>
            </ul>
        </nav>
    )
}