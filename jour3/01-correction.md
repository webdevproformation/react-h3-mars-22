Router => App.js => 

<Routes>
    <Route path="/" element={}>
    <Route path="/" element={}>
    <Route path="/" element={}>
</Routes>

=> déplacer dans le src/index.js

// opérateur classique + - / * 
//  2 + 2

// opérateur uniaire ++ -- ...
const x = 10
x++

// ... ES6 => à partir de 2015 
const t = [2,3,4]

// const t2 = [...t] ; // clone 

// const o = { age : 10 , nom : "toto"}
// const r = {adresse : "ville 1" , cp : 75000}
const p = {...o , ...r}
p {age : 10 , nom : "toto" ,adresse : "ville 1" , cp : 75000}

// fusion de deux objets 

const etudiant = {nom : "Alain", note : 10};
const modification = { note : 20}

const etudiantNouveau = {...etudiant, ...modification}
const etudiantNouveau = {nom : "Alain", note : 10, note : 20}
const etudiantNouveau = {nom : "Alain", note : 20}


const grosO = {
    adresse : { ville : "P" , cp : 75000},
    profil : {nom : "a" , age : 12}
}
const {ville , cp }= grosO.adresse
const {nom , age }= grosO.profil

const adresse = grosO.adresse

const nouveau = {...grosO}