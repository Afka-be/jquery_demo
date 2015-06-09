$(document).ready(function() {
    var decalage = parseInt($("#carre").css("margin-left"));
    var largeur = $('.container').width();
    var direction;
    $(".move").click(function() {
        if((decalage+ $("#carre").width()) < largeur){
            $("#carre").animate({
                marginLeft: "+=50px"
            }, 350, function() {
                decalage = parseInt($("#carre").css("margin-left"));
                console.log(decalage);
            });
        }
        else {
            $("#carre").animate({
                marginLeft: "-=50px"
            }, 350, function() {
                decalage = parseInt($("#carre").css("margin-left"));
                console.log(decalage);
            });
        }
        if ((decalage+ $("#carre").width()) > largeur) {
            direction='left';
        } else {}
    });

});