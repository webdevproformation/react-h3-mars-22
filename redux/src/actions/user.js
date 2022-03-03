import axios from "axios";
// dispatch({ type : "action" , payload : ""})

// function ajouterArticle () {
//    return  dispatch({ type : "ajouter_Article" , payload : ""})
//}

export const GET_USER_1 = "GET_USER_ 1";
export const MODIF_NOM_USER = "MODIF_NOM_USER";
export const ADD_COMPETENCE = "ADD_COMPETENCE";
 
export function getUser1(){
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/users/1").then(({data}) => {
            return dispatch({type : GET_USER_1 , payload : data})
        })
    }
}

export function modifUserName(){
    return {
        type : MODIF_NOM_USER ,
        payload : "Zorro" 
    }
}
