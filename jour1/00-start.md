# support 

- https://formation.webdevpro.net/react
- login : react
- mdp : fb

## install react 

npx create-react-app jour1-tp

## npm versus npx 

npm => télécharger npmjs.com (package)
npm i : installation que pour un seul projet 
npm i -g : installer le package pour l'ensemble de vos projets 

-- installation en global => utiliser directement depuis notre terminal 

tsc => outil en ligne de commande 
create-react-app

tsc fichier.ts 

npm i -g tsc # installation en global
tsc fichier.ts # utiliser 

npx => npm --exec (alias) npm -x

npx tsc fichier.ts # install et exécuté / mise à jour automatique 

----

npx create-react-app jour1-tp
cd jour1-tp
npm start

## router

Composant 

=> fonctionnelle => function , () => {}
=> class 

=> router : 
=> http://exemple.fr => Composant Home
=> http://exemple.fr/contact => Composant Contact
=> http://exemple.fr/produits/2 => Composant Produit (requête pour récupérer dans la base de données le produit avec l'id 2)

=> PHP / MySQL / html avec Apache => protocole stateless 

=> SPA : Single Page Application 
=> même si on change d'url pas de rechargement de ressource  
=> il restera juste images / appel à des base de données (API)

=> https://reactrouter.com/

laisser le terminal ouvert <br>
cd jour1-tp <br>
npm i react-router-dom

=> installer bootstrap

npm i bootstrap 

## cas pratique 

1 créer un composant Navbar.jsx 

2 ce composant fonctionnel va retourner une barre de menu bootstrap 
- elle contient 2 liens 
- Accueil
- Contact

https://getbootstrap.com/docs/5.1/components/navbar/

3 Afficher ce composant dans App.js 

4 https://github.com/webdevproformation/react-h3-mars-22

## correction 

- ajouter bootstrap en global dans App.js
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
- autre solution possible installer react-bootstrap 

- créer un dossier qui va contenir les composants dans src
- créer le composant Navbar.jsx
- appeler et exécuter le composant Navbar.jsx dans App.js 