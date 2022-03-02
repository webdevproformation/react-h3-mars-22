import { createContext , useReducer } from "react";

export const UserContext = createContext();

function userReducer(state, action){
    switch(action.type){
        case "CONNEXION" :
            return {...state , ...action.payload}
        case "LOGOUT" : 
            return {...state , isLogged : false}
        default : 
            return state ;
    }

}

let initialUser = {
    isLogged : false ,
    pseudo : ""
};

export const UserContextProvider = ({children}) => {
    const localStorageProfil = JSON.parse(localStorage.getItem("profil"));
    if(localStorageProfil != null){
        initialUser = localStorageProfil
    }
    const [user , dispatch] = useReducer(userReducer , initialUser); 

    return <UserContext.Provider value={{...user , dispatch}}>
        {children}
    </UserContext.Provider>
}


// [nb , setNb]= useState(1)
// useState("azerty")
// useState(true)

// setNb (nb + 1)

// [profil, setProfil] = useState({nom : "a" , age : 12})

// setProfil(profil.age + 1) ?? => ça ne fonctionne pas 
// setProfil ({...profil , age : profil.age = 1}) => la mise à jour est effectuée car deux objets avec deux adresses mémoires différentes 