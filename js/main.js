var showBar = false,
    stage = "mainScreen",
    levelHandler = new LevelHandler(),
    player = new Entity();

function setSize() {
    var win = $(window);
    if (showBar) {
        $('#result').css({height: win.height-30});
        $('#menu').css('height', win.height() - 30);
    } 
}

$(document).ready(function() {
    setSize();
    $(window).resize(function() {
        setSize();
    });

    levelHandler.update();

    characterCreation(player);
});