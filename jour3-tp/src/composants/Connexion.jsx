import { useState , useContext } from "react";
import { Auth } from "../service/Auth"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

export const Connexion = () => {
    const [form, setForm] = useState({login: "a" , password : "a"}) 
    const navigate = useNavigate()
    const {dispatch} = useContext(UserContext)

    function onChange(e){
        const { name, value}= e.target;
        setForm(prevForm => {return {...prevForm , [name]:value}})
    }
    function onSubmit(e){
        e.preventDefault();
        Auth.login(form, dispatch , navigate)
    }

    return (
        <div className="d-flex align-items-center justify-content-center h-100">
            <form className="w-50 text-center" onSubmit={onSubmit}>
                <h1>Accéder au back office</h1>
                <input type="text" name="login" className="form-control d-block" placeholder="login" value={form.login} onChange={onChange} />
                <input type="text" name="password" className="form-control d-block my-4" placeholder="password" value={form.password} onChange={onChange} />
                <input type="submit" className="btn btn-outline-dark"/>
            </form>
        </div>
    )
}