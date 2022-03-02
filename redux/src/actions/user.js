import axios from "axios";
// dispatch({ type : "action" , payload : ""})

// function ajouterArticle () {
//    return  dispatch({ type : "ajouter_Article" , payload : ""})
//}

export const GET_USER_1 = "GET_USER_ 1";

export function getUser1(){
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/users/1").then(({data}) => {
            return dispatch({type : GET_USER_1 , payload : data})
        })
    }
}
