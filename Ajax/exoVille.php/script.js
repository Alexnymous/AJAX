$('#recup').click(function(){
    var ville = $('#ville').val();
    $.ajax({
        type: 'GET',
        url: 'https://geo.api.gouv.fr/communes/?nom=',
        dataType: 'json',
        data: {
            nom: ville
        },
        timeout: 4000,
        success: function(data){
            for(i = 0; i<data.length; i++){
                // $('#name').append(data[i].nom);
                // $('#zip').append(data[i].codesPostaux);
                // $('#pop').append(data[i].population);
                // $('#dep').append(data[i].codeDepartement);
                $('table').append(`
<tr>
    <td>`+data[i].nom+`</td>
    <td>`+data[i].codesPostaux+`</td>
    <td>`+data[i].population+`</td>
    <td>`+data[i].codeDepartement+`</td>
</tr>`);
            }
            $('#results').html('Résultats: ' + data.length);

            if(data.length === 0){
                $('.alert').html('Aucun résultat pour cette ville');
            }

        },
        error: function(){
            alert('itsnt work !')
        }

    });

});