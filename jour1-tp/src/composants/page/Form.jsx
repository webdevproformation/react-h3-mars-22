import { useState , useContext } from "react";
import { UserContext } from "../../context/userContext";

export const Form = () => {
    const [form, setForm ] = useState({nom : ""})
    const {setUser} = useContext(UserContext)

    function onSubmit(e){
        e.preventDefault();
        setUser( prevState => {
            return {...prevState , nom : form.nom}
        } )
       // console.log(form);
    }
    return <>
        <h1>Modification d'une valeur dans le context UserContext</h1>
        <form onSubmit={onSubmit}>
            <input text="text" value={form.nom} onChange={e =>  setForm({...form, nom :e.target.value}) }/>
            <input type="submit" />
        </form>
    </>
}