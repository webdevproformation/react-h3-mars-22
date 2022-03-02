import axios from "axios";

export class Auth {
    static login (form , dispatch , navigate){
        axios.get(`http://localhost:3002/users?login=${form.login}&password=${form.password}`)
        .then(({data}) => {
            if(data.length === 1){
                    // enregistrer le pseudo dans le UserContext => setUser
                    const profil = {isLogged : true , pseudo : data[0].pseudo}
                    dispatch({type : "CONNEXION" , payload : profil})
                    /* setUser(prevUser => {
                            return {...prevUser, ...profil}
                        }) */
                   navigate("/admin")
                   localStorage.setItem("profil" , JSON.stringify(profil))
            }
        })

    }
    static logout(navigate , dispatch){
        localStorage.removeItem("profil") ; // suppression localstorage
        navigate("/connexion") // redirection vers la formulaire de connexion
        dispatch({type : "LOGOUT" }) // maj du state global => menu => masquer gestion et déconnexion 
    }
}
