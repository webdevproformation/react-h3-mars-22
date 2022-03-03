import {useDispatch} from "react-redux"
import {useState} from "react"
import { useNavigate} from "react-router-dom";

export function Login () {
    const dispatch = useDispatch()
    const [form, setForm]  = useState({login : "a" , password : "a"}) 
    const navigate = useNavigate()

    function onSubmit(e){
        e.preventDefault();
        dispatch({type:"LOGIN" , payload : form})
        navigate("/historique");
    }

    function onChange(e){
        const {name, value }= e.target;
        setForm(prevForm => {
            return {...prevForm, [name] : value}
        })
    }
    return (
       <>
        <h1>afficher l'historique</h1>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="login" value={form.login} name="login" onChange={onChange}/>
            <input type="text" placeholder="password" value={form.password} name="password" onChange={onChange}/>
            <input type="submit" />
        </form>
       </>
    )
}