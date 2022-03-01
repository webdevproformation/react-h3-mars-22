import {useReducer} from "react"

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

    function getData(ressource){
        fetch(`https://jsonplaceholder.typicode.com/${ressource}/1`)
        .then(reponse => reponse.json())
        .then(data => dispatch({type : ressource , payload : data }))
        .catch(ex => {
            dispatch({type : "KO" , payload : ex.message })
        })
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
        
    </>
}