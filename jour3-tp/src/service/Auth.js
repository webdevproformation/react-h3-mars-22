import axios from "axios";

export class Auth {
    static login (form , dispatch , navigate){
        axios.get(`http://localhost:3002/users?login=${form.login}&password=${form.password}`)
        .then(({data}) => {
            if(data.length === 1){
                data[0].token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0xvZ2dlZCI6dHJ1ZSwicHNldWRvIjoiQWxhaW4iLCJpYXQiOjEyMzQ1Njc4OX0.epAE0QUbR3-ik24v3A4cFY3264vxOkzG4uLfbqW8qtw"
                console.log(data);
                    // enregistrer le pseudo dans le UserContext => setUser
                    const profil = {isLogged : true , pseudo : data[0].pseudo }
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
