import {useState , useEffect} from "react"

export function Page3 (){
    const [chargement ,setChargement ] = useState(true)
    const [data , setData] = useState(null);
    const [erreur , setErreur] = useState("")

    // appeler un API useEffect()
    // si tout est ok => chargement => false
    // si tout est ok => data => [...]

    // si tout est ko => data = []
    // si tout est ko => erreur => "erreur 404"

    // logique entre les différents state 

    useEffect( () => {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(reponse => reponse.json() )
        .then(data => {
            setData(data);
            setChargement(false);
            setErreur("pas d'erreur")
        } )
        .catch( ex  => {
            setData([]);
            setChargement(false);
            setErreur(ex.message)
        })
    }, [])

    return <>
        {!chargement && 
            <>
                <pre>{JSON.stringify(data , null , " ")}</pre>
                <p>{erreur}</p>
            </>     
        }
    </>
}