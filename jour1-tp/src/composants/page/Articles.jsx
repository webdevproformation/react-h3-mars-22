 
import { Link , useLocation , useNavigate } from "react-router-dom"
import { useArticles } from "../../hook/useArticles"
import {useState , useEffect} from "react";


export function Articles () {
   
    const [articles , setArticles] = useState(useArticles());
    const [ordre, setOrdre] = useState("ASC")
    const query = useLocation();
    const navigate = useNavigate();


    useEffect( () => {
        const q = new URLSearchParams(query.search)
        const orderBy = q.get("orderBy") ;
        if(orderBy === "DESC"){
            const cloneArticle = [...articles]; 
            cloneArticle.reverse();
            setArticles(cloneArticle)
        } else {
            setArticles(articles)
        }
    } , [ordre] )
   
    function manageOrder(){
        if(ordre === "ASC"){
            setOrdre("DESC")
            navigate(`/articles?orderBy=DESC`)
        }else {
            setOrdre("ASC")
            navigate(`/articles?orderBy=ASC`)
        }
    }

    return (
        <div className="row">
            <header className="d-flex justify-content-between align-items-center py-3">
            <h1>Page des Articles</h1>
            <button onClick={manageOrder} className="btn btn-dark">changer ordre</button>
            </header>
           
            { articles.map( (article, index) => {
                return <div key={index} className="col-4">
                    <article  className="card">
                        <h2 className="card-header">{article.titre}</h2>
                        <img src={article.img} alt="" />
                        <p className="card-body">{article.contenu}</p>
                        <div className="card-footer">
                            <Link to={`/articles/${article.id}`}>lire la suite </Link>
                        </div>
                    </article>
                </div>
            }) }
        </div>
    )
}