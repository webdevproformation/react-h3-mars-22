import {GET_USER_1 , MODIF_NOM_USER , ADD_COMPETENCE} from "../actions/user"; 
const profil = null ;

export function userReducer(state = profil , action) {
        switch(action.type){
            case GET_USER_1 : 
                return action.payload ;
            case MODIF_NOM_USER : 
                return {...state , name : action.payload}
            case ADD_COMPETENCE : 
                const cloneUser = {...state};
                // si la propriété competences n'existe pas => il faut la créer 
                if(!cloneUser.competences) cloneUser.competences = new Set()
                cloneUser.competences.add(action.payload);
                console.log(cloneUser)
                return cloneUser ; 
            default :
                return state ; 
        }
}
