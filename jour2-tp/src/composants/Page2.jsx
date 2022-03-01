// [state , setterState] = useState(valInitialState)
import { useReducer } from "react"
// [state , dispatch ] = useReducer( refFonctionReductrice , valInitialState )

function reduceNb(state , action ){ // state , action => { modifier le state }
 // centraliser l'ensemble des modifications du state à 1 seul endroit 
 // dans la fonction réductrice 
    console.log(action); 
    switch(action.type){
        case "DIMINUER" : 
            return state - 1 ;
        case "AUGMENTER" :
            return state + 1 ;
        default : // quand on charge 
            return state ; 
    }
}

export const Page2 = () => {

    //const [nb, setNb] = useState(0); // 0 => number / string / boolean
    const [nb , dispatch ] = useReducer( reduceNb , 0)

    return <>
    <span>{nb}</span>
    <button className="btn btn-danger" onClick={() => dispatch({type:"DIMINUER"}) }>-</button>
    <button className="btn btn-success" onClick={() => dispatch({type: "AUGMENTER"}) }>+</button>
    </>

}