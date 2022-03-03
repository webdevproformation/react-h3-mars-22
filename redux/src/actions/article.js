import axios from "axios";

export const GET_ALL_POSTS = "GET_ALL_POSTS" ;
export const DELETE_FIRST = "DELETE_FIRST" ;

export function getAllPost () {
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then( ({data}) => dispatch({type : GET_ALL_POSTS , payload : data} ) )
    }
}
