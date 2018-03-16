<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>exoTrois</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
    <div class="row">
        <h3>Connexion</h3>
    </div>
        <div class="formulaire">
            <div class="row">
                <div class="success">
                </div>
            </div>
            <form id="connexion" action="login.php" method="post">
                <input type="text" id="email" name="email" required="required" placeholder="Email" align="center"/><br />
                <p class="errorMail"></p>
                <input type="password" id="password" name="password" required="required" placeholder="Mot de passe" /><br />
                <p class="errorPwd"></p>
                <input id="submit" type="submit" value="Envoyer" />
            </form>
        </div>
    </div>


</div>

<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
<script src="script.js"></script>

</body>
</html>