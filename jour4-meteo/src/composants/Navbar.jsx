import { Link } from "react-router-dom";
import {useSelector} from "react-redux"

export function Navbar () {
    const {isLogged} = useSelector(state => state.userReducer)
    console.log(isLogged);
    return <nav>
        <ul className="menu">
            <li><Link to="/">Accueil</Link></li>
            {isLogged && <li><Link to="/historique">Historique</Link></li>}
            {!isLogged && <li><Link to ="/login">Connexion</Link></li>}
            {isLogged && <li><button>deconnexion</button></li>}
        </ul>
    </nav>
}