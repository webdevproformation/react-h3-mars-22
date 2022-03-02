React / Angular 

requête auprès de votre serveur (API )

login / password 

dans le localstorage => {"isLogged" : true , "pseudo" : "Alain"} + signer 
// https://jwt.io/

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0xvZ2dlZCI6dHJ1ZX0.zKgifhlwLT668rutBtWLCEzgYlq8o8RQFH03IxiHPE8

{"isLogged" : true} => encodage HS256 + signature chaine de caractère privée 

A     ================= B 

azerty   ============> bafsuz 
bafsuz                 azerty                 
cryptage symétrique 

cryptage asymétrique 

fonction + clé privée + azerty - 1234   ================> 
fonction + clé privée + azerty - 1256   ================> 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0xvZ2dlZCI6dHJ1ZSwicHNldWRvIjoiQWxhaW4iLCJpYXQiOjEyMzQ1Njc4OX0.epAE0QUbR3-ik24v3A4cFY3264vxOkzG4uLfbqW8qtw + fonction azerty - 1234


axios.post("serveur.com/users" , {login : "" , password : ""} , {headers : })