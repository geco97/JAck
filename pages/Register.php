<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Jack Yacoub</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">
    <link rel="stylesheet" href="css/myStyle.css">
   

</head>
<body class="bg-light">
    <main>
        <div class="container">
            <div class="py-5 text-center">
                
<?php 
require ("dbinfo.inc.php");
if(isset($_POST["signup"])){
$UserName = $_POST["UserName"];
$email = $_POST["email"];
$password = $_POST["password"];
$firstName = $_POST["firstName"];
$lastName = $_POST["lastName"];
$telenummber = $_POST["telenummber"];
$birthday = $_POST["birthday"];
$customRadioInline = $_POST["customRadioInline"];
$adress = $_POST["adress"];
$postCode = $_POST["postCode"];
$city = $_POST["city"];
$textareaInput = $_POST["textareaInput"];
$accept = $_POST["accept"];
$createdAt = date("Y-m-d H:i:s"); 
$sql_insert_user = "INSERT INTO `users`( `UserName`, `email`, `password`, `firstName`, `lastName`, `telenummber`, `birthday`, `customRadioInline`, `adress`, `postCode`, `city`, `textareaInput`, `accept`, `createdAt`)
 VALUES ('$UserName','$email',MD5(".$password."),'$firstName','$lastName','$telenummber','$birthday','$customRadioInline','$adress','$postCode','$city','$textareaInput','$accept','$createdAt')";
     mysqli_set_charset($conn,"utf8");
     if(mysqli_query($conn,$sql_insert_user)){    
      ?>

<h2 class="text-color2019">Tack För registrering <?=$firstName?> <?=$lastName?></h2>
<div class="row mt-20 mb-20 pl-20 pr-20">
                <div class="col-lg-12 mt-20 mb-20 pl-20 pr-20">
                    <div class="card bg-light mb-3">
                        <div class="card-header">Inloggning Uppgifter</div>
                        <div class="card-body">
                            <div class="mb-3">
                            <ul class="list-group">
        <li  class="list-group-item">Användarnamn: <?=$UserName?></li>
        <li  class="list-group-item">E-post: <?=$email?></li>
        <li  class="list-group-item">Lösenord: <?=$password?></li>
    </ul>
                            </div> 
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 mt-20 mb-20 pl-20 pr-20">
                    <div class="card bg-light mb-3">
                        <div class="card-header">Personliga Uppgifter</div>
                        <div class="card-body">
                            <div class="mb-3">
                            <ul class="list-group">
        <li  class="list-group-item">Telefonnummer: <?=$telenummber?></li>
        <li  class="list-group-item">Födelsedag: <?=$birthday?></li>
        <li  class="list-group-item">Kön: <?=$customRadioInline?></li>
        <li  class="list-group-item">Adress: <?=$adress?></li>
        <li  class="list-group-item">Postadress: <?=$postCode?> <?=$city?></li>
    </ul>
                            </div> 
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 mt-20 mb-20 pl-20 pr-20">
                    <div class="card bg-light mb-3">
                        <div class="card-header">Om dig</div>
                        <div class="card-body">
                            <div class="mb-3">
                            <p><?=$textareaInput?></p>
                            </div> 
                        </div>
                    </div>
                </div>
</div>

      <?php
        }
     else{
?>

<h2 class="text-color2019">Fel i registrering <?=$firstName?> <?=$lastName?></h2>
<div class="row mt-20 mb-20 pl-20 pr-20">
                <div class="col-lg-12 mt-20 mb-20 pl-20 pr-20">
                    <div class="card bg-light mb-3">
                        <div class="card-header">Beskrivning</div>
                        <div class="card-body">
                            <div class="mb-3">
                                <p>Du kan inte välj "<?=$UserName?>" som användarnamn, finns "<?=$UserName?>" redan i Databas. <a href="../index.html">Hemsida</a></p>
                            </div> 
                        </div>
                    </div>
                </div>
                </div>
<?php 
     }
}else{
    header('Location: ../index.html');
}
?>
            </div>
        </div>
    </main>
    <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"></script>
</body>
</html>