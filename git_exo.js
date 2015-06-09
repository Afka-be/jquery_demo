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
    
    $(".change").click(function() {
        var clicks = $(this).data('clicks');
        if (clicks) {
            $("#carre").animate({borderRadius:"0px"});
        } else {
            $("#carre").animate({borderRadius:"20px"});
        }
        $(this).data("clicks", !clicks);

        //Les propriétés non numériques ne peuvent être animées avec jquery, le Backgroundcolor n'est donc pas animable.
        if($("#carre").hasClass('carre_style')){
            $("#carre").removeClass('carre_style');
        } else {
            $("#carre").addClass('carre_style');
        } 
    });

});