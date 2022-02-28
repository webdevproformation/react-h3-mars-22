## useContext pour la suite !

useState => permet de stocker les données locales du composant 
state
useEffect 
=> fonction qui va être rééexécutée si votre composant est render 

useEffect( () => {} , [])
useEffect( () => {} , [ variable ])

useContext => permettre de partager des données entre des composants quelquesoit leur position dans l'arborescence

<Parent>
    <Enfant props="valeurs" />
</Parent>  

A ----- D
 B
  C

useContext / createContext 

const UserContext = createContext()

<userContext.Provider value={}>
{children}
</userContext.Provider>

=> appliquer sur le coposant App.js 

=> utiliser dans n'importe quelle composant 

créer un nouveau dossier => context

créer un fichier dataContext.jsx

=> permet de créer des variables globales dans votre application react 







