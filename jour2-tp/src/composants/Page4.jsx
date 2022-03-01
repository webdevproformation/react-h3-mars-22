import {useReducer , useEffect} from "react"

const initialState = {
    chargement : true ,
    data : null ,
    erreur : ""
};
function reducer(state , action ){
    switch(action.type){
        case "OK" : 
            return { 
                data  : action.payload.data,
                erreur : "pas d'erreur",
                chargement : false ,
                time : action.payload.time
            }
        case "KO" :
            return { 
                data  : [],
                erreur : action.payload,
                chargement : false
            }
        default :
         return state ;
    }
}

export const Page4 = () => {
    /* const [chargement ,setChargement ] = useState(true)
    const [data , setData] = useState(null);
    const [erreur , setErreur] = useState("") */

    const [state , dispatch] = useReducer( reducer ,  initialState);

    useEffect( () => {
        /* fetch("https://jsonholder.typicode.com/posts/2")
        .then(reponse => reponse.json() )
        .then(data => {
            dispatch({type : "OK" , payload :  {data  , time : new Date()} })
        } )
        .catch( ex  => {
            dispatch({type : "KO" , payload :  ex.message })
        }) */
        async function getArticle(){
            try{
                // throw new Error("erreur inconnue"); 
                const reponse = await fetch("https://jsonplaceholder.typicode.com/posts/2")
                const data = await reponse.json()
                dispatch({type : "OK" , payload :  {data  , time : new Date()} })
            }catch(ex){
                dispatch({type : "KO" , payload :  ex.message })
            }
        }
        getArticle();

    

    }, [])

    return <>
        {!state.chargement && 
            <>
                <pre>{JSON.stringify(state.data , null , " ")}</pre>
                <p>{state.erreur}</p>
                <p>{JSON.stringify(state.time)}</p>
            </>     
        }
    </>
}