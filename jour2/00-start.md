# support 

- https://formation.webdevpro.net/react
- login : react
- mdp : fb

## github

https://github.com/webdevproformation/react-h3-mars-22

- hook 

=> useState / useEffect / useContext 

=> useReducer 

=> useReducer + useEffect + useContext == Redux (state manager)

=> stopper le projet jour1-tp 
=> lancer un nouveau projet jour2-tp 

npx create-react-app jour2-tp

## cas pratique 

1 installer bootstrap dans ce nouveau projet 
2 installer react router dom dans ce nouveau projet

npm i bootstrap react-router-dom

3 créer un premier composant => Navbar 
qui contient 2 liens 
Page 1 /
Page 2 /page/2

const calcul = () => { 
    return 2 + 2
}

const calcul = () => 2 + 2 ;

const calcul = (x) => {
    if(x > 2){
        return 2 + 2
    }
}

const calcul = (x) => (x > 2) ? 2 + 2 : undefined 

const calcul = () => { 2 + 2 } ; // return undefined 

const Composant = () => {
    const [a] = useState(null)
    return <p>{a}</p>
}

// ES6 

const toto = 10 ;

const state = {
    toto : toto
}

const state = {
    toto
}