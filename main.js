$(function(){
    var line;
    $('img').click(function() {
        if(line == null){
            console.log('hey')
        };
        line = $(this).attr("class"); //get train class
        console.log(line);
        event.preventDefault();
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/getStatus",
            data: {line: line},
            success: function(data) {
                console.log(data);
                console.log(data["text"]);
                $(".train-status").append(data["text"]);
            },
            error: console.error
        });
    });
});
