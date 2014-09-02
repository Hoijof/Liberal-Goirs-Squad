function setSize() {
    var win = $(window);
    $('#result').css({height: win.height-30});
    $('#menu').css('height', win.height() - 30);
}

$(document).ready(function() {
    setSize();
    $(window).resize(function() {
        setSize();
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

    var player = new Entity();
    characterCreation(player);
});