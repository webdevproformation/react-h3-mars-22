
import axios from "axios";
export const ADD_HISTORIQUE = "ADD_HISTORIQUE";
export const GET_HISTORY = "GET_HISTORY";

export function add(data){
    return (dispatch) => {
        axios.post("http://localhost:3002/historique", data)
        .then(({data}) => dispatch({
            type : ADD_HISTORIQUE,
            payload : data
        }))
        .catch( ex => console.log(ex.message))
    }
}

export function get (){
    return (dispatch) => {
        axios.get("http://localhost:3002/historique")
        .then(({data}) => dispatch({
            type : GET_HISTORY,
            payload : data
        }))
        .catch( ex => console.log(ex.message))
    }
}

