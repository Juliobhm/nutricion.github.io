var cifra = "70";
var campo = "";
$(document).ready(function(){

$('.pesoValor, .tallaValor').click(function(e){
    e.preventDefault(e);
    campo = e.target.className;
    $('.mascaraTecladoMayor').fadeIn(300);
    $('.mascaraTecladoMenor').fadeIn(300);
    $('.contenedorTeclado').fadeIn(300);
    if (campo.includes('pesoValor')) { 
        cifra = $('.pesoValor').text();
        $('.pesoValor').css("color", "red")
    }
    else if (campo.includes('tallaValor')) {
        cifra = $('.tallaValor').text();
        $('.tallaValor').css("color", "red")
    };
})

$('.contenedorTeclado .teclado .hecho').click(function(){
    console.log('cerrar teclado');
    $('.mascaraTecladoMayor').fadeOut(300);
    $('.mascaraTecladoMenor').fadeOut(300);
    $('.contenedorTeclado').fadeOut(300);
    $('.pesoValor, .tallaValor').css("color", "black");

    


});
$('.datosPaciente .celda_2_2, sexoActual, .datosPaciente .celda_3_2, .pesoValor, .datosPaciente .celda_4_2, tallaValor, calculosIndividualizados .celda_2_2, pesoCalorias, calculosIndividualizados .celda_3_2, pesoProteinas').hover(
    function(){
    $(this).css({"color": "red", "cursor": "pointer"});
    $(this).children().css({"color": "red", "cursor": "pointer"});
     }, 
    function(){
    $(this).css({"color": "black", "cursor": "none"});
    $(this).children().css({"color": "black", "cursor": "none"});

}
);

$('.teclado > *').click(function(e) {
    e.preventDefault(e);
    var numero = e.target.textContent;
    var clase = e.target.className;
    if (clase.startsWith('numero')) {
        añadirNumero(numero);
    }
    else if (clase === 'punto') {
        console.log('punto');
        añadirPunto(numero);
    }
    else if (clase === 'C') {
        borrarNumero();
    }
    else if (clase = 'hecho') {
        mostrarNumero()
    }
})

function añadirNumero(numero){
    cifra = cifra + numero;
    mostrarNumero();
}

function añadirPunto(numero){
    if (cifra.includes('.') || cifra === "") {
    }
    else {
        cifra = cifra + numero;
    }
    mostrarNumero();

}  
function borrarNumero(){
   cifra = cifra.slice(0 , -1);
   mostrarNumero();
}
function mostrarNumero(){
    if (campo.includes('pesoValor')) { 
        $('.pesoValor').text(cifra)
    }
    else if (campo.includes('tallaValor')) {
        $('.tallaValor').text(cifra)
    }

}

})