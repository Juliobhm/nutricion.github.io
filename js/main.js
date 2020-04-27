

 

var nutriciones = [
        {nombre: "Glucerna", corCal: 1.5, corProt: 0.075},
        {nombre: "Oxepa", corCal: 1.5, corProt: 0.062}
        ];
var nutricion = 'Glucerna';
var indice = 0;
var sexo = "Hombre";
var peso = 70;
var talla = 170;
var imc = 0;
var pesoIdeal = 0;
var pesoAjustado = 0;
var pesoElegidoCal = 70;
var pesoElegidoProt = 70;
var proteinasKg = 2.0;
var caloriasKg = 20;
var corCal = 1.5;
var corProt = 0.075;
var requerimientosCal = [0,0,0,0,0,0];
var requerimientosProt = [0,0,0,0,0,0];
var prescripcionCal = [0,0,0,0,0,0];
var pescripcionProt = [0,0,0,0,0,0];
var mlNutricion = [0,0,0,0,0,0];
var sobresFresubin = [0,0,0,0,0,0];
var administrado = ["","","","","",""];
var volumenNutricion = 1000;
var sobresNutricion = 5;
// requerimientos = [caloriasDia1, caloriasDia2, caloriasDia3, caloriasEstabe]
var controlInicial = 0;

 $(document).ready(function(){
    calculos();



/* =============================
Apertura del menú lateral. El icono de apertura tiene efecto toggle.
============================== */
$('.boton-menu').on('click touch', function () {
    if ($(this).hasClass('fa-bars')){
        $(this).removeClass('fa-bars').addClass('fa-times');
        
        $('.menuPrincipal ul').css({'visibility': 'visible'}).animate({'width': '98%'}, 400);

    }
    else {
        $(this).removeClass('fa-times').addClass('fa-bars'); 
        $('.menuPrincipal ul').animate({'width': '0px'}, 400, function(){
            $('.menuPrincipal ul').css({'visibility': 'hidden'})
        });
    };
});

/* ======================================
Efecto hover sobre la barra lateral para
el cambio de color
======================================== */
$('.menuPrincipal ul li').hover(function () {
    // over
    $(this).find('li').css({'color':'white', 'cursor': 'pointer'});
    
}, function () {
    // out
    $(this).find('li').css({'color':'grey'});
}
);

/* ======================================
Elección de la vista en la barra lateral.
Envía a la función abrir vista.
======================================== */
$('.menuPrincipal  ul li').on('click touch', function (){
    var submenu = $(this).find('span').text();
    console.log('submentu: ',submenu);

    vista = "";
    if(submenu === 'Nutriciones'){
        vista = '.contenedor .menu .tiposNutricion ul';
        }

    else if(submenu === 'Datos del paciente'){
    vista = '.contenedor .menu .datosPaciente ul';
    }
    else if(submenu === 'Requerimientos teóricos'){
        vista = '.contenedor .menu .requerimientosTeoricos ul';
    }
    else if(submenu === 'Prescripción'){
        vista = '.contenedor .menu .prescripcion ul';
    }
    else if(submenu === 'Cálculos individualizados'){
        vista = '.contenedor .menu .calculosIndividualizados ul';
    };

    abrirVista(vista);
});

/* ======================================
Abrir vista tras hacer click en la barra 
lateral.
======================================== */
function abrirVista(vista){

        // $('.contenedor .sobreponer').css({'display':'block'});
        $(vista).css({'visibility': 'visible'}).animate({'width': '100%', 'visibility': 'visible'}, 400);
 
        $('.menuPrincipal ul').animate({'width': '0px'}, 400, function(){
            $('.menuPrincipal ul').css({'visibility': 'hidden'})
        });
    $('.encabezado .boton-menu').removeClass('fa-times').addClass('fa-bars'); 
};

/* ===================================
Cerrar las vistas con el icono de la derecha
====================================== */
$('.desplegable .fa-times').on('click touch', function (){
    $(vista).animate({'width': '0px', 'visibility': 'hidden'}, 300, function(){$(vista).css({'visibility': 'hidden'}); 
    } ); 

    }); 

/* ======================================
Pulsar el icono de información de las nutriciones
======================================= */
    $('.boton-info').on('click touch', function () {
            var informacion = $(this).parents('div').siblings('div');

        if ($(this).hasClass('fa-info')){
            $(this).removeClass('fa-info').addClass('fa-times');
            $(informacion).css({'visibility': 'visible'}).animate({'height': '80px'}, 200);
        }
        else {
            $(this).removeClass('fa-times').addClass('fa-info'); 

            $(informacion).animate({'height': '0px'}, 200, function(){
                $(informacion).css({'visibility': 'hidden'})
            });
        };
    });

/* =======================================
Check sobre el tipo de nutrición
======================================= */
$('.fa-check').click(function (e) { 
    e.preventDefault();
    $(this).css({'color': 'RGBA(32, 55, 100, 1.00)'});
    nutricion = $(this).siblings('span').text();

    $(this).parents('li').siblings().find('.fa-check').css({'color': 'Grey'});
    calculos();
});

/* ======================================
Elección de sexo
======================================== */
$('.sexoElegido').click(function (e) { 
    e.preventDefault();
    sexo = $('.sexoActual').text()
    console.log('Entrada ', sexo);
    if(sexo==='Hombre') {
        sexo='Mujer';
    }
    else {
        sexo='Hombre';
    }
    $('.sexoActual').text(sexo);
    calculos();
});

/* ======================================
Introducción del peso y la talla abriendo
el teclado.
======================================== */
$('.pesoValor, .tallaValor').click(function(e){
    $('.pesoValor, .tallaValor').css({'color': 'grey'});
    $(this).css({'color': 'RGBA(142, 169, 219, 1.00'});
    campo = e.target.className;
    if(e.target.textContent != ""){
        cifra =e.target.textContent};
    $('.teclado').css({'visibility': 'visible'}).animate({'height': '200px'}, 220);
});

$('.teclado > *').click(function(e) {
    e.preventDefault(e);
    numero = e.target.textContent;
    clase = e.target.className;

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
        salirTeclado()
    }
});
function añadirNumero(numero){
    console.log(cifra);
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
    if(campo === 'modificable pesoValor centro'){
            console.log('campo: ',campo,cifra);

       $('.pesoValor').text(cifra);
       peso = parseFloat(cifra);    
    }
    else if(campo === 'modificable tallaValor centro'){
        $('.tallaValor').text(cifra);
        talla = parseFloat(cifra);     
     }
}
function salirTeclado(){
    $('.teclado').animate({'height': '0px'}, 200, function(){$('.teclado').css({'visibility': 'hidden'})
    });
    $('.pesoValor, .tallaValor').css({'color': 'grey'});
    calculos();
};

/* ======================================
Elección del peso para las necesidades
inidividualizadas de calorías.
======================================== */
$('.pesoCalorias').on('click touch', function (){
    if ($('.pesoCalorias > span').text() === "Peso real") {
    console.log('click peso');


        pesoElegidoCal = pesoIdeal
        $('.pesoCalorias > span').text("Peso ideal");
    }
    else if ($('.pesoCalorias > span').text() === "Peso ideal") {
        pesoElegidoCal = pesoAjustado;
        $('.pesoCalorias > span').text("Peso ajustado");
    }
    else if ($('.pesoCalorias > span').text() === "Peso ajustado") {
        pesoElegidoCal = peso;
        $('.pesoCalorias > span').text("Peso real");
    };
    console.log(pesoElegidoCal);
    calculos();
});

/* ======================================
Elección del peso para las necesidades
inidividualizadas de proteínas.
======================================== */
$('.pesoProteinas').on('click touch', function (){
    if ($('.pesoProteinas span').text() === "Peso real") {
        pesoElegidoProt = pesoIdeal
        $('.pesoProteinas span').text("Peso ideal");
    }
    else if ($('.pesoProteinas span').text() === "Peso ideal") {
        pesoElegidoProt = pesoAjustado;
        $('.pesoProteinas span').text("Peso ajustado");
    }
    else if ($('.pesoProteinas span').text() === "Peso ajustado") {
        pesoElegidoProt = peso;
        $('.pesoProteinas span').text("Peso real");
    };
    calculos();
});

/* =======================================
Click sobre las flechas de modificación de
valor
======================================== */
$('.flecha').on('click touch', function (){
    flecha = $(this).attr('class');
    $destino = $(this).siblings('span'); 
    valor = parseFloat($destino.text());
    adjudicacionFlecha(flecha, $destino, valor);
})
/* ====================================
Efecto click and hold sobre las flechas
==================================== */
    var intervalo = "";
    var contador = 0;
    var destino;
    var valor;

    // Clik en el botón
    $('.flecha').on('mosusedown touchstart', function (){ 
        flecha = $(this).attr('class');
        $destino = $(this).siblings('span');
        clearInterval(intervalo);
        intervalo = setInterval(function() {
        valor = parseFloat($destino.text());
        adjudicacionFlecha(flecha, $destino, valor);
        }, 300);
    });

    // Se libera el botón
    $('.flecha').on('mosuseup touchend', function (){
        clearInterval(intervalo);
    });

/* =============================
Adjudicar el valor a las flechas pulsadas. Sirve para el click y para el click-Hold
============================== */
function adjudicacionFlecha(flecha, $destino, valor ){
    console.log('flecha ante: ',flecha)
    if(flecha === 'calorias flecha flechaArriba fas fa-chevron-up'){
        valor += 1;
        $destino.text(valor.toFixed(0));
        caloriasKg = valor;
    }
    else if(flecha === 'calorias flecha flechaAbajo fas fa-chevron-down'){
        if (valor > 0) {
        valor -= 1;
        $destino.text(valor.toFixed(0));
        caloriasKg = valor;
        }
    }
    else if(flecha === 'proteinas flecha flechaArriba fas fa-chevron-up'){
        valor += 0.1;
        $destino.text(valor.toFixed(1));
        proteinasKg = valor;
    }
    else if(flecha === 'proteinas flecha flechaAbajo fas fa-chevron-down'){
        if (valor > 0) {
        valor -= 0.1;
        $destino.text(valor.toFixed(1));
        proteinasKg = valor;
        }
    }
    else if(flecha === 'nutricion flecha flechaArriba fas fa-chevron-up'){
        valor += 50;
        $destino.text(valor.toFixed(0));
        volumenNutricion = valor;
    }
    else if(flecha === 'nutricion flecha flechaAbajo fas fa-chevron-down'){
        if (valor > 0) {
        valor -= 50;
        $destino.text(valor.toFixed(0));
        volumenNutricion = valor;
        }
    }
    else if(flecha === 'sobresNutricion flecha flechaArriba fas fa-chevron-up'){
        valor += 1;
        $destino.text(valor.toFixed(0));
        sobresNutricion = valor;
    }
    else if(flecha === 'sobresNutricion flecha flechaAbajo fas fa-chevron-down'){
        if (valor > 0) {
        valor -= 1;
        $destino.text(valor.toFixed(0));
        sobresNutricion = valor;
        }
    }
    calculos();
}

/* =======================================
Cálculos

======================================== */
function calculos () {
    /* =======================================
    Obtención del índice de la nutrición
    ======================================== */
    console.log(nutricion);
    for(var i = 0; nutriciones.length -1; i++) {
        if (nutriciones[i].nombre === nutricion) {
            indice = i;
            break;
        };
    };

    /* =======================================
    Cálculo de imc, peso y requerimientos
    ======================================= */
    imc = peso / (talla * talla / 10000);
    if (sexo==='Hombre') {
        pesoIdeal = (talla-100) - ((talla-150)/4)
    }
    else if(sexo==='Mujer') {
        pesoIdeal = (talla-100) - ((talla-150)/2.5)
    }
    pesoAjustado = (peso-pesoIdeal)*0.4 + pesoIdeal;

    if (imc < 30) {
        requerimientosCal = [10*peso, 15*peso, 20*peso, 25*peso];
        requerimientosProt = [1*peso, 1.3*peso, 1.5*peso, 1.8*peso];

    }
    else if (imc >30 && imc < 50) {
        requerimientosCal = [5*pesoAjustado, 7*pesoAjustado, 10*peso, 14*pesoAjustado];
        console.log('estamos aquí', 1.3*pesoIdeal);
        // requerimientoProt = [1.3*pesoIdeal, 1.5*pesoIdeal, 2*pesoIdeal, 2.2*pesoIdeal]; 
        requerimientosProt = [1.3*pesoIdeal, 1.5*pesoIdeal, 2*pesoIdeal, 2.2*pesoIdeal]; 
    }
    else if (imc > 50){
        requerimientosCal = [5*pesoAjustado, 10*pesoAjustado, 15*pesoAjustado, 20*pesoAjustado];
        requerimientosProt = [1.3*pesoIdeal, 1.5*pesoIdeal, 2*pesoIdeal, 2.2*pesoIdeal]; 

    }

    console.log(peso, pesoAjustado, pesoIdeal, imc);

    /* =======================================
    Se añaden la prescripción individualizada según calorías y gramos de proteinas
    ======================================= */
    requerimientosCal[4] = pesoElegidoCal * caloriasKg;
    requerimientosProt[4] = pesoElegidoProt * proteinasKg;

    requerimientosCal.forEach(function(item, index, arr){
        console.log('Requerimientos día :',index, arr[index]);
    })
    requerimientosProt.forEach(function(item, index, arr){
        console.log('Requerimientos día :',index, arr[index]);
    })
    prescripcionCal.forEach(function(item, index, arr){
        arr[index] = requerimientosCal[index] / nutriciones[indice].corCal;
    });
    pescripcionProt.forEach(function(item, index, arr) {  
        arr[index] = requerimientosProt[index] * nutriciones[indice].corProt;

    });



    /* =======================================
    Cálculo de los mL de nutrición y redondeo a múltiplos de 50
    ======================================= */
    mlNutricion.forEach(function(item, index, arr){
        arr[index] = Math.round(prescripcionCal[index]/50)*50;
    });   
    
    /* =======================================
    Cálculos de los sobre de Fresubin
    ======================================= */
    sobresFresubin.forEach(function(item, index, arr){
    arr[index] = (requerimientosProt[index] - prescripcionCal[index]*nutriciones[indice].corProt) / 10;
    });

    /* =======================================
    Redondeo de los sobre de Fresubin
    ======================================= */
    sobresFresubin.forEach(function(item, index, arr){
        arr[index] = Math.round(item);
    });

    /* =======================================
    Se añade el valor 5, correspondiente a los cálculos individualizados por volumen y sobres (individualizado_2)
    ======================================= */
    mlNutricion[5] = volumenNutricion
    sobresFresubin[5] = sobresNutricion;

  

    /* =======================================
    Calculo los datos para el campo Administrado
    ======================================= */
    administrado.forEach(function(item, index, arr){
        arr[index] = Math.round(mlNutricion[index] * nutriciones[indice].corCal) +
        ' cal - ' +
        Math.round(mlNutricion[index] * nutriciones[indice].corProt + sobresFresubin[index] * 10) +
        ' g Prot'
    });

    /* =======================================
    Redondeo de los requerimientos de Calorías y Proteina para presentación en pantalla.
    ======================================= */
   //Se hace al final, para que los cálculos previos sean sobre datos sinredoendear
   requerimientosCal.forEach(function(item, index, arr){
    arr[index] = Math.round(item);
    });
requerimientosProt.forEach(function(item, index, arr){
arr[index] = Math.round(item);
});

rellenarCampos();

}


    /* ======================================
    Rellenar los campos de la pantalla con los
    datos calculados.
    ======================================== */
    function rellenarCampos() {





        $('.pesoValor').text(peso);
        $('.tallaValor').text(talla);
        $('.imcValor').text(Math.round(imc*10)/10);
        $('.pesoIdealValor').text(Math.round(pesoIdeal*10)/10);
        $('.pesoAjustadoValor').text(Math.round(pesoAjustado*10)/10);
    
        $('.req_cal_dia_1').text(requerimientosCal[0]);
        $('.req_cal_dia_2').text(requerimientosCal[1]);
        $('.req_cal_dia_3').text(requerimientosCal[2]);
        $('.req_cal_estable').text(requerimientosCal[3]);

        $('.req_prot_dia_1').text(requerimientosProt[0]);
        $('.req_prot_dia_2').text(requerimientosProt[1]);
        $('.req_prot_dia_3').text(requerimientosProt[2]);
        $('.req_prot_estable').text(requerimientosProt[3]);

        $('.presc_mL_dia_1').text(mlNutricion[0]);
        $('.presc_mL_dia_2').text(mlNutricion[1]);
        $('.presc_mL_dia_3').text(mlNutricion[2]);
        $('.presc_mL_estable').text(mlNutricion[3]);

        $('.presc_sobres_dia_1').text(sobresFresubin[0]);
        $('.presc_sobres_dia_2').text(sobresFresubin[1]);
        $('.presc_sobres_dia_3').text(sobresFresubin[2]);
        $('.presc_sobres_estable').text(sobresFresubin[3]);

        $('.admin_dia_1').text(administrado[0]);
        $('.admin_dia_2').text(administrado[1]);
        $('.admin_dia_3').text(administrado[2]);
        $('.admin_estable').text(administrado[3]);

        //Prescripcion por calorías y proteinas
        $('.caloriasKg').text(caloriasKg.toFixed(0));
        $('.proteinasKg').text(proteinasKg.toFixed(1));
        $('.presc_mL_indiv_1').text(mlNutricion[4]);
        $('.presc_sobres_indiv_1').text(sobresFresubin[4]);
        $('.admin_indiv_1').text(administrado[4]);
        
        //Prescripción por mL y sobres
        $('.presc_mL_indiv_2').text(mlNutricion[5]);
        $('.presc_sobres_indiv_2').text(sobresFresubin[5]);
        $('.admin_indiv_2').text(administrado[5]);

    } 



});