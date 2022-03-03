import { GET_ALL_POSTS , DELETE_FIRST } from "../actions/article"


const articles = [];

export function articleReducer(state = articles , action){
    switch(action.type){
        case GET_ALL_POSTS : 
            return action.payload ;
        case DELETE_FIRST : 
            const cloneArticles = [...state]; 
            cloneArticles.shift()
            return cloneArticles ;
        default :
            return state ;
    }
   
}