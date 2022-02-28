import { useState } from "react";

export function useUser(){
    const [users] = useState([
        {id : 1 , nom : "Charles" , role : "admin" , url : "https://thispersondoesnotexist.com/image?v=1"},
        {id : 2 , nom : "Alain" , role : "redacteur" , url : "https://thispersondoesnotexist.com/image?v=2"},
        {id : 3 , nom : "Béatrice" , role : "gestionnaire" , url : "https://thispersondoesnotexist.com/image?v=3"},
    ]);
    return users ;
}