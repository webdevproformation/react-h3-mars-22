import {useState} from "react"
import {useDispatch} from "react-redux";
import {MODIF_FIRST_TITLE} from "../actions/article"

export const Form = () => {
    const [titre , setTitre] = useState("")
    const dispatch = useDispatch()

    function onSubmit(e){
        e.preventDefault(); 
        dispatch({type : MODIF_FIRST_TITLE, payload : titre})
        setTitre(""); // reset du champ titre !  
    }

    return <form onSubmit={onSubmit}>
        <input type="text" placeholder="nouveau titre" value={titre} onChange={e => setTitre(e.target.value)}/>
        <input type="submit" />
    </form>
}