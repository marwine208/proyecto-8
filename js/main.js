$(document).ready(function(){
//Se crea un objeto es la opcion mas simple ya se requiere automatizar y animar cada uno de los slider ...
var banner= {
    padre:$("#banner"),
    numeroSlides: $("#banner").children(".slide").length,
    posicion:1
}
var info= {
    padre:$("#info"),
    numeroSlides: $("#info").children(".slide").length,
    posicion:1
}
banner.padre.children(".slide").first().css({
    "left":0
});
info.padre.children(".slide").first().css({
    "left":0
});
var altoBanner = function(){
var alto=banner.padre.children(".slide").outerHeight();
banner.padre.css({
    "height":alto + "px"
});
//console.log(alto);
}
var altoInfo = function(){
    var alto=info.padre.children(".active").outerHeight();
    info.padre.animate({
        "height":alto + "px"
    });
    //console.log(alto);
    }
var altoContenedor = function(){
    var altoVentana =$(window).height();
    if(altoVentana<=$(".contenedor").outerHeight()+200){
        $("#contenedor").css({
            "height":" "
        });
    } else{
        $("#contenedor").css({
            "height":altoVentana + "px"
        });   
    }
}

altoBanner();
altoInfo();
altoContenedor();
$(window).resize(function(){
    altoBanner();
    altoInfo();
    altoContenedor();
});

$("#info").children(".slide").each(function(){
    $("#botones").append("<span>");
    });
    $("#botones").children("span").first().addClass("active");

//console.log(banner.numeroSlides);
//-----------------------------------------
//---------BANNER-------------------------
//--------------------------------

//  BOTON SIGUIENTE
$("#banner-next").on("click",function(e){
    e.preventDefault();

    if (banner.posicion<banner.numeroSlides) {
        //Nos aseguramos de los demas Slides empiecen desde la derecha
        banner.padre.children().not(".active").css({
            "left":"100%"
        });
        //Quitamos la clase "active" y se la ponemos al siguiente elemento . Y lo animamos
        $("#banner .active").removeClass("active").next().addClass("active").animate({
        "left":"0"
        });
        //Animamos el Slide anterior para que se desplaze hacia la izquierda 
        $("#banner .active").prev().animate({
        "left":"-100%"
        });
        //contador para que incremente de uno en uno
        banner.posicion=banner.posicion + 1;
    } 
    else {
        //Hacemos que el slide activo (es decir el ultimo ) se anime hacia la derecha 
        $("#banner .active").animate({
        "left":"-100%"
        });
        //Selecionamos todos los slides que no tengan la clase .active 
        //y los posicionamos a la derecha 
        banner.padre.children().not(".active").css({
        "left":"100%"
         });
         //Elimanos la clase active y se la ponemos al primer elemento 
         //Despues lo animamos 
        $("banner .active").removeClass("active");
        banner.padre.children(".slide").first().addClass("active").animate({
        "left":0
        });
        //Reseteamos a la posicion 1 
         banner.posicion= 1 ;
    }
});

        //  BOTON ANTERIOR

        $("#banner-prev").on("click",function(e){
        e.preventDefault();

        if(banner.posicion> 1){

            banner.padre.children().not(".active").css({
                "left":"-100%"
            });

            $("#banner .active").animate({
                "left":"100%"
            });

            $("#banner .active").removeClass("active").prev().addClass("active").animate({
                "left": 0
            });
            banner.posicion=banner.posicion - 1;
        } else {
            banner.padre.children().not(".active").css({
                "left":"-100%"
            });
            $("#banner .active").animate({
                "left":"100%"
            });
            $("#banner .active").removeClass("active");
            banner.padre.children().last().addClass("active").animate({
                "left":0
            });
            banner.posicion=banner.numeroSlides;
        }
    });

//console.log(banner.numeroSlides);
//-----------------------------------------
//--------- INFO TEXTO----------------
//--------------------------------

//  BOTON SIGUIENTE INFO TEXTO
$("#info-next").on("click",function(e){
    e.preventDefault();

    if (info.posicion<info.numeroSlides) {
        //Nos aseguramos de los demas Slides empiecen desde la derecha
       info.padre.children().not(".active").css({
            "left":"100%"
        });
        //Quitamos la clase "active" y se la ponemos al siguiente elemento . Y lo animamos
        $("#info .active").removeClass("active").next().addClass("active").animate({
        "left":"0"
        });
        //Animamos el Slide anterior para que se desplaze hacia la izquierda 
        $("#info .active").prev().animate({
        "left":"-100%"
        });
       
       $("#botones").children(".active").removeClass("active").next().addClass("active");
        //contador para que incremente de uno en uno
        info.posicion=info.posicion + 1;
    } 
    else {
        //Hacemos que el slide activo (es decir el ultimo ) se anime hacia la derecha 
        $("#info .active").animate({
        "left":"-100%"
        });
        //Selecionamos todos los slides que no tengan la clase .active 
        //y los posicionamos a la derecha 
        info.padre.children().not(".active").css({
        "left":"100%"
         });
         //Elimanos la clase active y se la ponemos al primer elemento 
         //Despues lo animamos 
        $("#info .active").removeClass("active");
        info.padre.children(".slide").first().addClass("active").animate({
        "left":0
        });

        $("#botones").children(".active").removeClass("active");
        $("#botones").children("span").first().addClass("active");
        //Reseteamos a la posicion 1 
         info.posicion= 1 ;
    }
    altoInfo();
});

        //  BOTON ANTERIOR INFO TEXTO

        $("#info-prev").on("click",function(e){
        e.preventDefault();

        if(info.posicion> 1){

            info.padre.children().not(".active").css({
                "left":"-100%"
            });

            $("#info .active").animate({
                "left":"100%"
            });

            $("#info .active").removeClass("active").prev().addClass("active").animate({
                "left": 0
            });

            $("#botones").children(".active").removeClass("active").prev().addClass("active");

            info.posicion=info.posicion - 1;
        } else {
            info.padre.children().not(".active").css({
                "left":"-100%"
            });
            $("#info .active").animate({
                "left":"100%"
            });
            $("#info .active").removeClass("active");
            info.padre.children().last().addClass("active").animate({
                "left":0
            });

            $("#botones").children(".active").removeClass("active");
            $("#botones").children("span").last().addClass("active");
            info.posicion=info.numeroSlides;
        }
        altoInfo();
    });

});


