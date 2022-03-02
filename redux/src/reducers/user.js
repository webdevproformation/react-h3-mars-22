import {GET_USER_1} from "../actions/user"; 
const profil = null ;

export function userReducer(state = profil , action) {
        switch(action.type){
            case GET_USER_1 : 
                return action.payload ;
            default :
                return state ; 
        }
}
