function setWidth() {
    $('#result').css('width', $(window).width() - 200);
}

$(document).ready(function() {
    setWidth();
    $(window).resize(function() {
        setWidth();
    });

    $("#menuIndex").on("click", function(){
    	$("#result").html("Index!");
    });
    $("#menuStadistics").on("click", function(){
    	$("#result").html("Stadistics!");
    });
    $("#menuGo").on("click", function(){
    	$("#result").html("Go!");
    });
});