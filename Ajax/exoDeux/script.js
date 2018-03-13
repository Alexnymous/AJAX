// $('#recup').click(function () {
//     $.getJSON('test.json', function (data) {
//         $('#name').html(data.name);
//         $('#age').html(data.age);
//         });
// });

$('#recup').click(function () {
    $.ajax({
        type: 'GET',
        url:'test.json',
        timeout: 4000,
        dataType:'json',
        success: function(data){
            $('#name').html(data.name);
            $('#age').html(data.age);
        }

    })
});