## fetch

## axios 

## json server 
npm install --global json-server
dans le dossier db dans public
dans ce dossier créer un fichier db.json
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