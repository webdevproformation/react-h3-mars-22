## cas pratique 

- ajouter un nouveau bouton dans le composant App.js
- lorsque vous cliquez dessus supprimer le 1er article dans la liste des articles
- si vous recliquez ça va supprimer le suivant !

## cas pratique 

- ajouter un formulaire avec 1 champ input + btn submit
- une fois que vous cliquez sur le bouton submit => modifier le titre du 1er article par la valeur que vous avez saisi !

## Array et Object 

const user = { name : "Lena" , age : 12}

user.length => erreur
user.map() => erreur

Object.keys(user).length => ["name" , "age"].length => OK 

const user = [{ name : "Lena" , age : 12}]

user.length => OK
user.map() => OK

PHP 
[]
{} => empty()

en JS 
[].length == 0
{}.length == 0 erreur
Object.keys({}).length == 0

## cas 

ajouter un nouveau formulaire permettre d'ajouter une nouvelle propriété à notre user 

1 ajouter un formulaire avec un seul champ => input de type text et submit
2 cliquer le submit => ajouter une nouvelle propriété à user => competence de type tableau 
3 à chaque fois que vous cliquez sur le bouton submit push() un nouvel item dans ce tableau 