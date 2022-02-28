import { useParams } from "react-router-dom";
import { useUser } from "../../hook/useUser";

export function Profil (){
    const { id } = useParams()
    const profils = useUser();

    function getUser(id){
        return profils.find(user => user.id === parseInt(id))
    }

    const {nom , url , role} = getUser(id);

    return <>
        <h1>{ nom }</h1>
        <img src={url} alt={nom} className="w-25"/>
        <p>role : { role }</p>
    </>
}