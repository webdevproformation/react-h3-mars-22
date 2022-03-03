import {GET_USER_1 , MODIF_NOM_USER} from "../actions/user"; 
const profil = null ;

export function userReducer(state = profil , action) {
        switch(action.type){
            case GET_USER_1 : 
                return action.payload ;
            case MODIF_NOM_USER : 
                return {...state , name : action.payload}
            default :
                return state ; 
        }
}
