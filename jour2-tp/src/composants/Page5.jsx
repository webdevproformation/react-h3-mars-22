import { useState , useReducer , useContext } from "react"
import { UserContext } from "../contexts/userContext"

const initialState = {
    data : [] ,
    loading  : false ,
    erreur : ""
}

function reducer (state , action){
    console.log(action)
    switch(action.type){
        case "users":
        case "posts" :
        case "comments" :
            return {...state , data : action.payload , erreur : "" }
        case "KO" : 
            return {...state , erreur : action.payload}
        default :
            return state
    }
}


export function Page5 (){

    const [state , dispatch] = useReducer(  reducer , initialState )
    const {dispatch : dispatchContext} = useContext(UserContext);
    function getData(ressource){
        fetch(`https://jsonplaceholder.typicode.com/${ressource}/1`)
        .then(reponse => reponse.json())
        .then(data => dispatch({type : ressource , payload : data }))
        .catch(ex => {
            dispatch({type : "KO" , payload : ex.message })
        })
    } 

    const [form, setForm] = useState({login : "", mdp : ""})

    const onChange= (e) =>{
        const {name , value}= e.target ;
        setForm(prevForm =>{ 
            return  {...prevForm , [name]: value} 
        } )
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(form); 
        dispatchContext({ type : "UPDATE_PROFIL" , payload : form })
    }

    return <>
        <button onClick={() => getData("users")}>users</button>
        <button onClick={() => getData("posts")}>posts</button>
        <button onClick={() => getData("comments")}>comments</button>
        {!state.loading && 
                    <>
                        <pre>{JSON.stringify(state.data , null , " ")}</pre>
                        <p>{state.erreur}</p>
                    </>}
        <hr />
        <h2>modifier le profil</h2>
        <form onSubmit={onSubmit}>
            <input type="text" value={form.login} onChange={onChange} placeholder="changer le login" name="login"/>
            <input type="text" value={form.mdp} onChange={ onChange } placeholder="changer le mdp" name="mdp"/>
            <input type="submit" />
        </form>
    </>
}

// fetch 
// axios => rdv 14h50 @ toute suite !!