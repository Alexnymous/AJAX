var map;
function initMap() {

    function addMarker(target, title) {
        var marker = new google.maps.Marker({
            position: target,
            map: map,
            title: title,
            animation: google.maps.Animation.DROP
        });
    }

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 46.227638, lng: 2.213749},
        zoom: 5
    });

    google.maps.event.addListener(map, 'onload', function (target) {
        $.ajax({
            type: 'GET',
            url: 'marker.php',
            timeout: 4000,
            dataType: 'json',
            success:function (data) {
                data.markers.forEach(function (marker) {
                    addMarker({
                        lat : parseFloat(marker.lat),
                        lng: parseFloat(marker.lng),
                        title:marker.title
                    });
                });
            },
            error: function(){
                alert('Connexion échouée');
            }
        });
    });

    google.maps.event.addListener(map, 'click', function (e) {
        $('#maps').after(`<div id="overlay">
            <form action="">
                <p><input type="text" placeholder="Titre du nouveau marqueur" id="marker-title"></p>
                <p><textarea id="marker-infos" cols="30" rows="10" placeholder="Contenu du marqueur"></textarea></p>
                <p><button id="cancel-marker">Annuler</button><button id="create-marker">Créer</button></p>
            </form>
        </div>`);
        $('#cancel-marker').click(function () {
            $('#overlay').remove();
        });

        $('#create-marker').click(function (e2) {
            e2.preventDefault();
            addMarker(e.latLng, $('#nom').val());

            $.ajax({
                type: 'post',
                url: 'marker.php',
                timeout: 4000,
                dataType: 'json',
                data: {
                    lat: e.latLng.lat().toFixed(6),
                    lng: e.latLng.lng().toFixed(6),
                    title: $('#marker-title').val(),
                    content: $('#marker-infos').val()
                },

                success: function (data) {
                    alert(data.title);
                }
            })

            $('#overlay').remove();
        });

    });
}



