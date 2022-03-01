import { useReducer } from "react"
import axios from "axios";
import { useEffect } from "react";

const initialForm = {
    id : "", 
    titre : "",
    contenu : "",
    categorie : "",
    articles : [],
    auteur : ""
}

function reducerForm( state , action ){
    switch(action.type){
        case "titre" :
            return {...state , titre : action.payload}
        case "contenu" :
            return {...state , contenu : action.payload}
        case "categorie" :
            return {...state , categorie : action.payload}
        case "auteur" :
                return {...state , auteur : action.payload}
        case "GET_ARTICLES" : 
            return {...state , articles : action.payload}
        case "DELETE_ARTICLE" :
            return {...state , articles : state.articles.filter( article => article.id !== action.payload  )}
        case "REMPLIR_FORM" :
            return {...state , 
                    titre : action.payload.article.titre,
                    contenu : action.payload.article.contenu,
                    categorie : action.payload.article.categorie ,
                    auteur : action.payload.article.auteur , 
                    id : action.payload.id
                }
        default :
            return state ; 
    }
}

export const Form = () => {

    const [form , dispatch] = useReducer( reducerForm , initialForm)

    function onSubmit(e){
        e.preventDefault();
        const data = {
            titre : form.titre,
            contenu : form.contenu,
            categorie : form.categorie,
            auteur : form.auteur
        }
        if(form.id === ""){
            axios.post( "http://localhost:3002/articles", data )
        }else {
            axios.put( `http://localhost:3002/articles/${form.id}`, data )
        }
       
    }

    useEffect( () => {
        axios.get("http://localhost:3002/articles").then( ({data}) => dispatch({type:"GET_ARTICLES" , payload : data}))
    } , [])

    const onDelete = (id) => {
        axios.delete(`http://localhost:3002/articles/${id}`).then(({data}) => 
        dispatch({type : "DELETE_ARTICLE" , payload : id})
        )
    }
    const onUpdate = (id) => {
       const articleAModifier =  form.articles.find(article => article.id === id)
       console.log(articleAModifier);

       dispatch({type : "REMPLIR_FORM" , payload : {id , article: articleAModifier}})
    }

    return <>
        <h1>Form !</h1>
        <div className="row">
            <form className="col-6" onSubmit={onSubmit}>
                <input type="hidden" value={form.id} />
                <input type="text" placeholder="le titre" className="form-control" value={form.titre} onChange={ (e) => dispatch({type : "titre" , payload : e.target.value})}/>
                <textarea placeholder="le contenu" className="form-control my-4" value={form.contenu} onChange={ (e) => dispatch({type : "contenu" , payload : e.target.value})}></textarea>
                <select className="form-select" value={form.categorie} onChange={ (e) => dispatch({type : "categorie" , payload : e.target[e.target.selectedIndex].value})}>
                    <option value="">veuillez sélectionner une catégorie</option>
                    <option value="js">js</option>
                    <option value="node">node</option>
                    <option value="angular">angular</option>
                </select>
                <input type="text" value={form.auteur} onChange={ (e) => dispatch({type : "auteur" , payload : e.target.value})} className="form-control my-4" placeholder="le nom de l'auteur"/>
                <input type="submit" className="btn btn-outline-success" />
            </form>
            <div className="col-6">
                {form.articles.map((article, index) => {
                    return <article key={index}>
                        <h3>{article.titre} <span className="badge bg-danger">{article.categorie}</span></h3>
                        <p>{article.contenu}</p>
                        <p>{article?.auteur}</p>
                        <button className="btn btn-sm btn-dark" onClick={() => onDelete(article.id)}>suppr</button>
                        <button className="btn btn-sm btn-warning ms-3" onClick={() => onUpdate(article.id)}>modif</button>
                        <hr />
                    </article>
                })}
            </div>
        </div>
    </>
}