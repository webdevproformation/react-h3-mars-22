 
import { Link , useLocation } from "react-router-dom"
import { useArticles } from "../../hook/useArticles"

export function Articles () {
   
    const articles = useArticles();
    
    const query = useLocation();

    const q =  new URLSearchParams( query.search)
    console.log(q.get("orderBy")) // "?orderBy=DESC" => DESC
    
    // [].reverse()

    return (
        <div className="row">
            <h1>Page des Articles</h1>
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