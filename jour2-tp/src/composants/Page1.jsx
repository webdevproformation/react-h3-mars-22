import { useState } from "react"

export const Page1 = () => {

    const [nb, setNb] = useState(0)

    return <>
        <span>{nb}</span>
        <button className="btn btn-danger" onClick={() => setNb(prev => prev - 1)}>-</button>
        <button className="btn btn-success" onClick={() => setNb(prev => prev + 1)}>+</button>
    </>

}