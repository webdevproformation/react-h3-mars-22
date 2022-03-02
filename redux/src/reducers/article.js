import { GET_ALL_POSTS} from "../actions/article"

const articles = [];

export function articleReducer(state = articles , action){
    switch(action.type){
        case GET_ALL_POSTS : 
            return action.payload
        default :
            return state ;
    }
   
}