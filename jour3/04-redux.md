## react avec des hooks state manager central

- useReducer 
    - fonction réductrice 
    - action 
    - dispatch 
- useContext + createContext 

## redux 

- useContext + createContext  => store (base de données sur l'ensemble des compsoants)

- store => dispatch 
-          action  : {type: "action à effectuer" , payload : "infos à envoyer"}
-          fonction réductrice => exactement la même syntaxe qu'avec useReducer 

+ extensions redux dev tool (le contenu du store ) => revenir dans le passé 

- redux => react / angular / vue / projet js vanille 
- redux n'est pas limité à React 

- react npx create-react-app
- redux npm i redux 
- react-redux npm i react-redux => permettre d'utiliser redux avec un projet react
- redux-thunk 
redux-devtools-extension => communiquer Redux avec l'extension sur la navigateur 

## installer l'extension sur le navigateur 

- Redux => support de cours 
- chrome 
- firefox 

## créer un nouveau projet 

npx create-react-app redux
cd redux
npm i redux react-redux redux-thunk redux-devtools-extension axios
npm start

## setup dans le fichier src/index.js


// dans la fonction reductrice de user 

1 appeler l'api https://jsonplaceholder.typicode.com/users/1
la charger dans le store

2 dispatch dans le fichier index.js 

3 afficher le profil utilisateur dans le composant App.js 