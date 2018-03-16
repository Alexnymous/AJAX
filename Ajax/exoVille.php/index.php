<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Ville</title>
    <link rel="stylesheet" href="csstyle.css">
</head>
<body>

<div class="container">
    <div class="row">
        <h3>Récupérer les infos d'une vile à partir de l'api : <a href="https://api.gouv.fr/api/api-geo.html">https://api.gouv.fr/api/api-geo.html</a></h3>
    </div>
    <div class="row">
        <input type="text" id="ville">
        <button type="submit" id="recup">Envoyer</button>
    </div>
    <div class="row">
        <div id="results"></div>
        <table>
            <tr>
                <td>Nom</td>
                <td>CP</td>
                <td>Population</td>
                <td>Dép</td>
            </tr>
        </table>
    </div>
</div>

<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
<script src="script.js"></script>

</body>
</html>