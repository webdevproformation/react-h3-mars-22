import { Link, useLocation } from "react-router-dom"
import {useState, useEffect} from "react"

import { useUser } from "../../hook/useUser"

export const Contact = () => {
    const [profils, setProfils] = useState(useUser());
    const [ordre , setOrdre] = useState("ASC")
    const query = useLocation();

    useEffect( () => {
        const q = new URLSearchParams(query.search)
        const orderBy = q.get("orderBy")
        console.log(orderBy)
        const resulat = profils.sort((a , b) => {
            if (a.nom < b.nom) {
                return -1;
              }
              if (a.nom > b.nom) {
                return 1;
              }
              return 0;
        })
        setOrdre("DESC");
        console.log(resulat); 
        setProfils(resulat);
    } , [ordre])

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