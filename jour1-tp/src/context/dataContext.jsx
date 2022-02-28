import { createContext } from "react";

// 1 créer le context
export const DataContext = createContext()

// créer un composant qui retourne Provider 
export function DataContextProvider( {children} ){

    const data = {
        nom : "Zorro",
        age : 44 ,
        formation : ["js", "react" , "Angular"]
    }

    return <DataContext.Provider value={ data }>
        {children}
    </DataContext.Provider>
}
