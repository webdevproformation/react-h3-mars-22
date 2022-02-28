import { useParams } from "react-router-dom"; 
import { useArticles } from "../../hook/useArticles"
// permettre de récupérer id dans l'url

export function Article (){
    const { id } = useParams() // exécuter le hook => et destructurer pour récupérer l'id 
    // dans la v5 et v6 
    const articles =  useArticles(); 

    function getArticle(id){
        return articles.find(article => { return article.id == id } )
    }

    const {titre , img , contenu} = getArticle(id);
    return <>    
            article seul { id }
            <h1>{ titre }</h1>
            <img src={img} alt="" />
            <p>{ contenu }</p>
        </>
}   