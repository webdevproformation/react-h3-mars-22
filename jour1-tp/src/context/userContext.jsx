import {createContext} from "react";

export const UserContext = createContext()

export const UserContextProvider = ({children}) => {

    const user = {
        nom : "Luigi",
        role : "rédacteur"
    };

    
    return <UserContext.Provider value={ user }>
        {children}
    </UserContext.Provider>
}