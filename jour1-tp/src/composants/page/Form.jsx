import { useState , useContext } from "react";
import { UserContext } from "../../context/userContext";
import { DataContext } from "../../context/dataContext";

export const Form = () => {
    const [form, setForm ] = useState({nom : "" , age : ""})
    const {setUser} = useContext(UserContext)
    const {setData} = useContext(DataContext)
   
    function onChange(e){
        const {name , value} = e.target
        setForm({...form, [name] :value })
    }

    function onSubmit(e){
        e.preventDefault();
        setUser( prevState => {
            return {...prevState , nom : form.nom }
        } )
       // console.log(form);
    }
    function onSubmit2(e){
        e.preventDefault();
        setData(prevState => {
            return {...prevState , age : form.age}
        })
       // console.log(form);
    }

    return <>
        <h1>Modification d'une valeur dans le context UserContext</h1>
        <form onSubmit={onSubmit}>
            <input text="text" value={form.nom} onChange={ onChange } name="nom"/>
            <input type="submit" />
        </form>

        <h2>deuxieme formulaire</h2>
        <form onSubmit={onSubmit2}>
            <input text="text" value={form.age} onChange={ onChange } name="age"/>
            <input type="submit" />
        </form>
    </>
}