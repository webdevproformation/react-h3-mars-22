## fetch

## axios 

## json server 
npm install --global json-server
créer le dossier db dans le dossier public
dans le dossier db, créer le fichier db.json
{
    "articles" : []
}
package.json ajouter un nouveau script 
"script" : {
    "api" : "json-server --watch ./public/db/db.json --port 3002"
}

cd jour2-tp
npm run api
http://localhost:3002/articles

## cas pratique : créer le composant Form.jsx
ce composant contient un formulaire ayant 3 champs 

titre => input type texte
contenu => textarea
categorie => menu déroulant contient 3 valeurs js / node / angular 

récupérer l'ensemble des valeurs dans le state local du composant 
utiliser bootstrap pour la mise en forme du composant 


## installer axios 

npm i axios

envoyer des infos pour les enregistrer en base de données 

axios.post("url" , {})
axios.get("url")
axios.put("url/id" , {})
axios.delete("url/id")

## cas pratique afficher la liste de tous les articles en base de données à la suite du formulaire

useEffect // useState 

## ajouter deux boutons en dessous de chaque article 
supprimer / modifier 

si vous cliquez sur le bouton supprimer => supprimer en base de données
axios.delete("url/id")

--------------

si vous cliquer sur le bouton modifier => réécrire les informations dans le formulaire de gauche 
ajouter un champ id 

