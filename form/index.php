<pre>
  

<?php 
if(isset($_FILES['photo'])){
/*  $connexion = new PDO("");
  $nomFichier= "./img/toto.png";
  $sql = "INSERT INTO uploads VALUES :nom";

  $stmt = $connexion->prepare($sql);
  $stmt->execute(["nom" => $nomFichier]);
  move_uploaded_file($_FILES['photo']["tmp_name"], "$nomFichier");
  var_dump("end"); */
}



?>
</pre>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <form enctype="multipart/form-data" method="post">
    <input type="file" name="photo" id="img">
    <input type="submit">
  </form>
  <script>
    document.querySelector("form").addEventListener("submit" , e => {
      e.preventDefault()

      var files = document.getElementById('img').files;

        console.log(files)

        fetch("http://localhost:1234/toto.php" , {method:"POST" , })
        .then( reponse => reponse.json())
        .then(data => console.log(data))
    })
  </script>
</body>
</html>