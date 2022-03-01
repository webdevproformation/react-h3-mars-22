import { useContext } from "react";
import { useState } from "react"
import { UserContext } from "../contexts/userContext";

export const Page1 = () => {

    const [nb, setNb] = useState(0); // 0 => number / string / boolean
    // destructuration avec renommage de la variable 
    const {login : toto} = useContext(UserContext)
    console.log(toto); 
    return <>
        <span>{nb}</span>
        <button className="btn btn-danger" onClick={() => setNb(prev => prev - 1)}>-</button>
        <button className="btn btn-success" onClick={() => setNb(prev => prev + 1)
        }>+</button>
        <p>{toto}</p>
    </>

}