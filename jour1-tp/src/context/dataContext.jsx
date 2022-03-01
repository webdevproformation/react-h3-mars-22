import { createContext , useState} from "react";

// 1 créer le context
export const DataContext = createContext()

// créer un composant qui retourne Provider 
export function DataContextProvider( {children} ){
    const [data, setData] = useState({
        nom : "Zorro",
        age : 44 ,
        formation : ["js", "react" , "Angular"]
    });


    return <DataContext.Provider value={ {...data , setData} }>
        {children}
    </DataContext.Provider>
}
