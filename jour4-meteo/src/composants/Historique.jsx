import { useEffect } from "react";
import { useSelector , useDispatch } from "react-redux"
import { get } from "../redux/historique/historique.action";


export function Historique () {

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(get());
    } , [])
    
    const historique = useSelector((state) => state.historiqueReducer)    

    return <div className="history_resultat">
        {historique.map((history, index) => {
            return <article key={index}>
                <h2>{history.location.name}</h2>
                <p>le : {history.location.localtime}</p>
                <h3>Météo</h3>
                <p>température : {history.current.temp_c} °C</p>
                <img src={history.current.condition.icon} alt="" />
            </article>
        })}
    </div>
}