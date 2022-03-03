import { useState , useEffect } from "react"
import {useDispatch} from "react-redux"
import axios from "axios";
import { add } from "../redux/historique/historique.action";

export function Home () {
    const [ville, setVille] = useState("") 
    const [resultat , setResultat] = useState({}) 
    const dispatch = useDispatch()

    useEffect( () => {
        async function getWeather(ville){
            try{
                const {data} = await axios(`https://api.weatherapi.com/v1/forecast.json?key=c405966876db487a902124636220303&q=${ville}&days=1&aqi=no&alerts=no`)
                setResultat(data);
            }catch(ex){
                console.log(ex.message)
            }
        }
        if( ville !== "" && ville.length > 4){
            getWeather(ville);
        }
    }, [ville])


    function modifVille(){
        return (e) => { setVille(e.target.value) }
    }

    function onSubmit(e){
        e.preventDefault();
        dispatch(add(resultat))
    }

    return <>
        <h1>Rechercher la météo pour une ville concernée</h1>
        <form onSubmit={onSubmit} className="search">
            <input type="text" value={ville} onChange={modifVille()} />
            <input type="submit" />
        </form>
        {Object.keys(resultat).length > 0 && <article>
                <h2>{resultat.location.name}</h2>
                <p>le : {resultat.location.localtime}</p>
                <h3>Météo</h3>
                <p>température : {resultat.current.temp_c} °C</p>
                <img src={resultat.current.condition.icon} alt="" />
            </article>}
        
        
    </>
}