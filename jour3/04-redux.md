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

npm i redux react-redux redux-thunk redux-devtools-extension axios