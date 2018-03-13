// $('#chat').click(function () {
//     $('#view').load('content/chat.php')
// });
// $('#chien').click(function () {
//     $('#view').load('content/chien.php')
// });
// $('#Poisson').click(function () {
//     $('#view').load('content/poisson.php')
// });

$('#chat').click(function () {
    $.get('content/chat.php',function (data){
        $('#view').html(data);
    });
});

$('#chien').click(function () {
    $.get('content/chien.php',function (data){
        $('#view').html(data);
    });
});

$('#Poisson').click(function () {
    $.get('content/poisson.php',function (data){
        $('#view').html(data);
    });
});
