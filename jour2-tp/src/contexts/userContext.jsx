import { createContext } from "react";
import { useReducer } from "react"

function userReducer(state, action){
    return state ; 
}
export const UserContext = createContext() 
// composant pour récupérer les informations
export const UserContextProvider = ({children}) => {
    const stateInitial = {
        login : "Zorro" ,
        password : "",
        role : ""
    }
    const [state , dispatch ] = useReducer( userReducer , stateInitial )

    return <UserContext.Provider value={ {...state , dispatch } }>
        {children}
    </UserContext.Provider>

}   
// celui à utiliser dans App.js => wrapper votre application
