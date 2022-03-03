import { useState } from "react"
import {useDispatch} from "react-redux"
import {ADD_COMPETENCE} from "../actions/user"

export const FormCompetence = () => {
    const [competence, setCompetence] = useState("")
    const dispatch = useDispatch()

    function comp(){
        return (e) => { setCompetence(e.target.value) }
    }
    function onSubmit(e){
        e.preventDefault();
        dispatch({type : ADD_COMPETENCE , payload : competence})
        setCompetence("");
    }

    return(

        <form onSubmit={onSubmit}>
            <h2>ajouter une compétence à l'utilisateur</h2>
            <input type="text" value={competence} onChange={comp()}/>
            <input type="submit" />
        </form>

    )
}