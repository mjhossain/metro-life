$(function(){
    $('#test').click(function() {
        var trainLine =
        event.preventDefault();
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/getStatus",
            data: {line: '2'},
            success: function() {
                console.log($("#test"));
            },
            error: console.error
        });
    });
});
