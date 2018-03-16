$(document).ready(function() {
    // Action qui est exécutée quand le formulaire est envoyé ( #connexion est l'ID du formulaire)
    $('#connexion').on('submit', function(e) {
        e.preventDefault(); // On empêche de soumettre le formulaire

        var $this = $(this); // L'objet jQuery du formulaire

        // Envoi de la requête HTTP en mode asynchrone
        $.ajax({
            url: 'login.php', // On récupère l'action (ici login.php)
            type: 'POST', // On récupère la méthode (post)
            data: $this.serialize(), // On sérialise les données = Envoi des valeurs du formulaire
            dataType: 'json', // JSON
            success: function(json) { // Si ça c'est passé avec succès
                // ici on teste la réponse
                if(json.success) {
                    $('#connexion').remove();
                    $('.success').html('Vous êtes connecté !');
                }else{

                    if(json.errors.incorrectEmail) {
                        $('.errorMail').html('Email incorrect');
                    }
                    if(json.errors.incorrectPassword){
                        $('.errorPwd').html('Mot de passe incorrect');
                    };
                }
            }
        });

    });
});