import { GET_HISTORY, ADD_HISTORIQUE } from "./historique.action"

const initialState = [];

export const historiqueReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_HISTORY :
            return action.payload
        case ADD_HISTORIQUE :
            return [...state , action.payload]
        default :
            return state
    }
}