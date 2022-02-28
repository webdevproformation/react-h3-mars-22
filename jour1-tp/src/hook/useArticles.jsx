import { useState } from "react" ; 

export function useArticles(){
    const [ articles ] = useState([
        {id : 1 , titre : "article 1" , contenu : "lorem ipsum" , img : "https://source.unsplash.com/random/800x200"},
        {id : 2 , titre : "article 2" , contenu : "lorem ipsum" , img : "https://source.unsplash.com/random/800x201"}
    ])
    return articles ; 
}

// hook personnalisé 