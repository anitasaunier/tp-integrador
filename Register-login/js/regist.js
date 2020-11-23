$(document).ready( 
    
    setTimeout(function(){
    
    $('.content-form').css("opacity", "1");
    $('.content-form').css("transform", "translate(0px)");
    }, 100)
)

//Email

$('#email').on('focus', function(){
    
    $('.lbl-email').css("margin-top", "-20px");
    $('.lbl-email').css("font-size", "14px");
})

$('#email').on('focusout', function(){
    
    if($('#email').val().length < 1){
        
        $('.lbl-email').css("margin-top", "10px");
        $('.lbl-email').css("font-size", "20px");
    }else{
        $('.lbl-email').css("margin-top", "-20px");
    $('.lbl-email').css("font-size", "14px");
    }
})

//Confirmar Email

$('#confirm-email').on('focus', function(){
    
    $('.lbl-confirm-email').css("margin-top", "20px");
    $('.lbl-confirm-email').css("font-size", "14px");
})

$('#confirm-email').on('focusout', function(){
    
    if($('#confirm-email').val().length < 1){
        
        $('.lbl-confirm-email').css("margin-top", "50px");
        $('.lbl-confirm-email').css("font-size", "20px");
    }else{
        $('.lbl-confirm-email').css("margin-top", "20px");
    $('.lbl-confirm-email').css("font-size", "14px");
    }
})


//Contraseña

$('#clave').on('focus', function(){
    
    $('.lbl-clave').css("margin-top", "20px");
    $('.lbl-clave').css("font-size", "14px");
})

$('#clave').on('focusout', function(){
    
    if($('#clave').val().length < 1){
        
        $('.lbl-clave').css("margin-top", "50px");
        $('.lbl-clave').css("font-size", "20px");
    }else{
        $('.lbl-clave').css("margin-top", "20px");
    $('.lbl-clave').css("font-size", "14px");
    }
})

//Confirmar Contraseña

$('#confirm-clave').on('focus', function(){
    
    $('.lbl-confirm-clave').css("margin-top", "20px");
    $('.lbl-confirm-clave').css("font-size", "14px");
})

$('#confirm-clave').on('focusout', function(){
    
    if($('#confirm-clave').val().length < 1){
        
        $('.lbl-confirm-clave').css("margin-top", "50px");
        $('.lbl-confirm-clave').css("font-size", "20px");
    }else{
        $('.lbl-confirm-clave').css("margin-top", "20px");
    $('.lbl-confirm-clave').css("font-size", "14px");
    }
})