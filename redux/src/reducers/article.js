import { GET_ALL_POSTS , DELETE_FIRST , MODIF_FIRST_TITLE } from "../actions/article"


const articles = [];

export function articleReducer(state = articles , action){
    switch(action.type){
        case GET_ALL_POSTS : 
            return action.payload ;
        case DELETE_FIRST : {
            const cloneArticles = [...state]; 
            cloneArticles.shift()
            return cloneArticles ;
        }
        case MODIF_FIRST_TITLE : {
            const cloneArticles = [...state]; 
            cloneArticles[0].title = action.payload;
            return cloneArticles;
        }
          
        default :
            return state ;
    }
   
}