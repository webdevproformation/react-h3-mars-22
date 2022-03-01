import { useReducer } from "react"
import axios from "axios";

const initialForm = {
    titre : "",
    contenu : "",
    categorie : ""
}

function reducerForm( state , action ){
    switch(action.type){
        case "titre" :
            return {...state , titre : action.payload}
        case "contenu" :
            return {...state , contenu : action.payload}
        case "categorie" :
            return {...state , categorie : action.payload}
        default :
            return state ; 
    }
}

export const Form = () => {

    const [form , dispatch] = useReducer( reducerForm , initialForm)

    function onSubmit(e){
        e.preventDefault();
        console.log(form);
        axios.post( "http://localhost:3002/articles", form )
    }

    return <>
        <h1>Form !</h1>
        <div className="row">
            <form className="col-6" onSubmit={onSubmit}>
                <input type="text" placeholder="le titre" className="form-control" value={form.titre} onChange={ (e) => dispatch({type : "titre" , payload : e.target.value})}/>
                <textarea placeholder="le contenu" className="form-control my-4" value={form.contenu} onChange={ (e) => dispatch({type : "contenu" , payload : e.target.value})}></textarea>
                <select className="form-select" value={form.categorie} onChange={ (e) => dispatch({type : "categorie" , payload : e.target[e.target.selectedIndex].value})}>
                    <option value="">veuillez sélectionner une catégorie</option>
                    <option value="js">js</option>
                    <option value="node">node</option>
                    <option value="angular">angular</option>
                </select>
                <input type="submit" className="btn btn-outline-success mt-4" />
            </form>
        </div>
    </>
}