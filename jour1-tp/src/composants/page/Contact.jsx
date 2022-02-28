import { useUser } from "../../hook/useUser"
import { Link } from "react-router-dom"

export const Contact = () => {
    const profils = useUser();

    return <div className="row">
        {profils.map( (profil , index) => {
            return <ul key={index} className="col-3">
                <li>nom  : {profil.nom}</li>
                <li>role : {profil.role}</li>
                <li><img src={profil.url} alt="" className="w-50 rounded-circle" /></li>
                <li><Link to={`/contact/${profil.id}`}>voir le profil </Link></li>
            </ul>
        } )}
    </div>
} 