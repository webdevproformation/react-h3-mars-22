import { Navigate, useNavigate, useParams } from "react-router-dom"; 
import { useArticles } from "../../hook/useArticles"
import { useState, useEffect , useContext } from "react"
import { UserContext } from "../../context/userContext";
// permettre de récupérer id dans l'url

export function Article (){
    const { id } = useParams() // exécuter le hook => et destructurer pour récupérer l'id 
    // dans la v5 et v6 
    const navigate = useNavigate();
    const {nom, role} = useContext(UserContext); 
   
    const articles = useArticles()
    const [article , setArticle] = useState({})
    
    useEffect(() => {
       const articleTrouve = articles.find(article => { return article.id == id } )
       if(articleTrouve !== null){
        setArticle(articleTrouve)
       }
    } , [])

    return <>    
            {article ? <>
                article seul { id }
                <h1>{ article.titre }</h1>
                <img src={article.img} alt="" />
                <p>{ article.contenu }</p>
                <p>article rédigé par {nom} - {role} </p>
            </> : <Navigate to="/not-found" />}
        </>
}   