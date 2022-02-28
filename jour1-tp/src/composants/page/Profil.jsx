import { useParams , useNavigate } from "react-router-dom";
import { useUser } from "../../hook/useUser";
import { useEffect } from "react"

export function Profil (){
    const { id } = useParams()
    const profils = useUser();
    const navigate = useNavigate();
    
    function getUser(id){
        const user = profils.find(user => user.id === parseInt(id))
        return user; // undefined 
    }
    
    console.log("render 1")
    useEffect( () => {
        console.log("render 3")
        const user = getUser(id) 
        if(user === undefined){
            navigate("/") // redirection si /contact/35555
        }
    }, []  )
    console.log("render 2")

    const {nom , url , role} = getUser(id);
    
    return <div className="text-center">
        <h1>{ nom }</h1>
        <img src={url} alt={nom} className="w-25"/>
        <p>role : { role }</p>
        <button className="btn btn-success" onClick={() => navigate("/contact")}>retour à la liste des contacts</button>
    </div>
}