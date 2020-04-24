

 

var nutriciones = [
        {nombre: "Glucerna", corCal: 1.5, corProt: 0.075},
        {nombre: "Oxepa", corCal: 1.5, corProt: 0.062}
        ];
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
var nutricion = "";
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
//     calculos();

    $('.menuPrincipal ul li').hover(function () {
        // over
        $(this).find('li').css({'color':'white', 'cursor': 'pointer'});
        
    }, function () {
        // out
        $(this).find('li').css({'color':'grey'});
    }
);


$('.boton-menu').click(function () {

    if ($(this).hasClass('fa-bars')){
        $(this).removeClass('fa-bars').addClass('fa-times');
        
        $('.menuPrincipal ul').css({'visibility': 'visible'}).animate({'width': 'calc(100% - 6px'}, 400);

    }
    else {
        $(this).removeClass('fa-times').addClass('fa-bars'); 
        $('.menuPrincipal ul').animate({'width': '0px'}, 400, function(){
            $('.menuPrincipal ul').css({'visibility': 'hidden'})

        });

    
    };
});



$('.menuPrincipal  ul li').click(function(){
    var submenu = $(this).find('span').text();
    console.log('submentu: ',submenu);

    vista = "";
    if(submenu === 'Datos del paciente'){
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
    console.log(vista);

    abrirVista(vista);


});
function abrirVista(vista){

        $('.contenedor .sobreponer').css({'display':'block'});
        $(vista).css({'visibility': 'visible'}).animate({'width': '100%', 'visibility': 'visible'}, 400);
 
        $('.menuPrincipal ul').animate({'width': '0px'}, 400, function(){
            $('.menuPrincipal ul').css({'visibility': 'hidden'})

        });


   

    
    $('.encabezado .boton-menu').removeClass('fa-times').addClass('fa-bars'); 


    // $('.menuPrincipal ul').css({'width':'0px', 'opacity':'0','visibility':'hidden'});
    // $('.sobreponer').css({'display':'block', 'z-index':'500'});


};
// Cerrar las vistas con el icono

$('.desplegable .fa-times').click(function(){
    $('.contenedor .sobreponer').css({'display':'none'});
    
    $(vista).animate({'width': '0px', 'visibility': 'hidden'}, 300, function(){
            $(vista).css({'visibility': 'hidden'}); 
    } ); 





})



// $('.menu .desplegable').click(function(e){
//     e.preventDefault();
//     if ($(this).hasClass('activado')) {
//         $(this).removeClass('activado');
//         $(this).find('ul').slideUp().addClass('oculto');
//     }
//     else {
       
//         $('.menu .desplegable ul').slideUp().addClass('menuOculto');
//         $(this).find('ul').removeClass
   
//         $(this).addClass('activado');
//         $(this).find('ul').removeClass('menuOculto').slideDown();
//     }
// })

// $('.modificable').change(function (e) { 
//     e.preventDefault();
//     calculos();
// });
// $('.sexoElegido').click(function (e) { 
//     e.preventDefault();
//     sexo = $('.sexoActual').text()
//     console.log('Entrada ', sexo);
//     if(sexo==='Hombre') {
//         sexo='Mujer';
//     }
//     else {
//         sexo='Hombre';
//     }
//     $('.sexoActual').text(sexo);
//     calculos();
// });

// $('.nutricionElegida.flechaArriba').click(function (e) {
//     if (indice < (nutriciones.length -1)){
//         indice += 1;
//     };
//     $('.nutricionValor').text(nutriciones[indice].nombre);

//     calculos();
// });

// $('.nutricionElegida.flechaAbajo').click(function (e) {
//     if (indice >= 1) {
//         indice -= 1;
//     }
//     $('.nutricionValor').text(nutriciones[indice].nombre);

//     calculos();
// });

// $('.calorias.flechaArriba').click(function (e) {
//     if ($('.pesoCalorias').text() === 'Peso real') {
//         pesoElegidoCal = peso}
//     if ($('.pesoCalorias').text() === 'Peso ajustado') {
//         pesoElegidoCal = pesoAjustado}    
//     if ($('.pesoCalorias').text() === 'Peso ideal') {
//         pesoElegidoCal = pesoIdeal}
//     caloriasKg = parseInt($('.caloriasKg').text());
//     caloriasKg += 1;
//     calculos();
// });
// $('.calorias.flechaAbajo').click(function (e) {
//     if ($('.pesoCalorias').text() === 'Peso real') {
//         pesoElegidoCal = peso}
//     if ($('.pesoCalorias').text() == 'Peso ajustado') {
//         pesoElegidoCal = pesoAjustado}    
//     if ($('.pesoCalorias').text() === 'Peso ideal') {
//         pesoElegidoCal = pesoIdeal}
//     caloriasKg = parseInt($('.caloriasKg').text());
//     if (caloriasKg > 0) {
//         caloriasKg -= 1;
//     }
//     calculos();
// });
// $('.proteinas.flechaArriba').click(function (e) {
//     if ($('.pesoProteinas').text() === 'Peso real') {
//         pesoElegidoProt = peso}
//     if ($('.pesoProteinas').text() === 'Peso ajustado') {
//         pesoElegidoProt = pesoAjustado}    
//     if ($('.pesoProteinas').text() === 'Peso ideal') {
//         pesoElegidoProt = pesoIdeal}
//     proteiniasKg = parseFloat($('.proteinasKg').text());
//     proteinasKg += 0.1;
//     calculos();
// });

// $('.proteinas.flechaAbajo').click(function (e) {
//     if ($('.pesoProteinas').text() === 'Peso real') {
//         pesoElegidoProt = peso}
//     if ($('.pesoProteinas').text() === 'Peso ajustado') {
//         pesoElegidoProt = pesoAjustado}    
//     if ($('.pesoProteinas').text() === 'Peso ideal') {
//         pesoElegidoProt = pesoIdeal}
//     proteiniasKg = parseFloat($('.proteinasKg').text());
//     if (proteinasKg > 0) {
//         proteinasKg -= 0.1;
//     }
//     calculos();
// });
// $('.pesoCalorias').click(function(){
//     if ($('.pesoCalorias').text() === "Peso real") {
//         console.log('Estamos en peso real');
//         pesoElegidoCal = pesoIdeal
//         $('.pesoCalorias').text("Peso ideal");
//     }
//     else if ($('.pesoCalorias').text() === "Peso ideal") {
//         pesoElegidoCal = pesoAjustado;
//         $('.pesoCalorias').text("Peso ajustado");

//     }
//     else if ($('.pesoCalorias').text() === "Peso ajustado") {
//         pesoElegidoCal = peso;
//         $('.pesoCalorias').text("Peso real");

//     };
//     console.log('clickClick',pesoElegidoCal,$('.pesoCalorias').text());
//     calculos();
// });

$('.pesoProteinas').click(function(){
    if ($('.pesoProteinas').text() === "Peso real") {
        pesoElegidoCal = pesoIdeal
        $('.pesoProteinas').text("Peso ideal");
        $('.pesoPProteinas').text(pesoElegidoProt);
    }
    else if ($('.pesoProteinas').text() === "Peso ideal") {
        pesoElegidoCal = pesoAjustado;
        $('.pesoProteinas').text("Peso ajustado");
    }
    else if ($('.pesoProteinas').text() === "Peso ajustado") {
        pesoElegidoCal = peso;
        $('.pesoProteinas').text("Peso real");
    };
    calculos();
})


// $('.nutricion.flechaArriba').click(function (e) {
//     volumenNutricion = parseInt($('.presc_mL_indiv_2').text());
//     volumenNutricion += 50;
//     calculos();
// });

// $('.nutricion.flechaAbajo').click(function (e) {
//     volumenNutricion = parseInt($('.presc_mL_indiv_2').text());
//     if (volumenNutricion > 0){
//         volumenNutricion -= 50;
//     }
//     calculos();
// });
// $('.sobres.flechaArriba').click(function (e) {
//     sobresNutricion = parseInt($('.presc_sobres_indiv_2').text());
//     sobresNutricion += 1;
//     calculos();
// });
// $('.sobres.flechaAbajo').click(function (e) {
//     sobresNutricion = parseInt($('.presc_sobres_indiv_2').text());
//     if (sobresNutricion > 0) {
//     sobresNutricion -= 1;
//     }
//     calculos();
// });

// function calculos () {
//     // Obtención del índice de la nutrición
//     nutricion = $('.nutricionValor').text();
//     for(var i = 0; nutriciones.length -1; i++) {
//        console.log(i);
//         if (nutriciones[i].nombre === nutricion) {
//             indice = i;
//             break;
//         }
//     };


//     console.log('Peso antes de nada:',peso);

//     console.log('Nutrición: ',nutricion, 'Indice: ',indice);
//     if ($('.pesoValor').text() != ""){
//         peso = parseFloat($('.pesoValor').text());
//     };
//     if ($('.tallaValor').text() != "") {
//         talla = parseFloat($('.tallaValor').text());
//     };
//     console.log('Peso: ',peso);
//     imc = peso / (talla * talla / 10000);
//     if (sexo==='Hombre') {
//         pesoIdeal = (talla-100) - ((talla-150)/4)
//     }
//     else if(sexo==='Mujer') {
//         pesoIdeal = (talla-100) - ((talla-150)/2.5)
//     }
//     $('.pesoIdeal').text(pesoIdeal);
//     pesoAjustado = (peso-pesoIdeal)*0.4 + pesoIdeal
//     if (imc < 30) {
//         requerimientosCal = [10*peso, 15*peso, 20*peso, 25*peso];
//         requerimientosProt = [1*peso, 1.3*peso, 1.5*peso, 1.8*peso];

//     }
//     else if (imc >30 && imc < 50) {
//         requerimientosCal = [5*peso, 7*peso, 10*peso, 14*peso];
//         console.log('estamos aquí', 1.3*pesoIdeal);
//         // requerimientoProt = [1.3*pesoIdeal, 1.5*pesoIdeal, 2*pesoIdeal, 2.2*pesoIdeal]; 
//         requerimientosProt = [1.3*pesoIdeal, 1.5*pesoIdeal, 2*pesoIdeal, 2.2*pesoIdeal]; 

    
//     }
//     else if (imc > 50){
//         requerimientosCal = [5*pesoAjustado, 10*pesoAjustado, 15*pesoAjustado, 22*pesoAjustado];
//         requerimientosProt = [1.3*pesoIdeal, 1.5*pesoIdeal, 2*pesoIdeal, 2.2*pesoIdeal]; 

//     }

//     //Se añaden la prescripción individualizada según calorías y gramos de proteinas
//     requerimientosCal[4] = pesoElegidoCal * caloriasKg;
//     requerimientosProt[4] = pesoElegidoProt * proteinasKg;

//     requerimientosProt.forEach(function(item, index, arr){
//         console.log(pesoIdeal, arr[index]);

//     })

//     prescripcionCal.forEach(function(item, index, arr){
//         arr[index] = requerimientosCal[index] / nutriciones[indice].corCal;
//     });
//     pescripcionProt.forEach(function(item, index, arr) {  
//         arr[index] = requerimientosProt[index] * nutriciones[indice].corProt;

//     });


//         console.log('PesoElegido, Req_5: ',requerimientosCal[5], requerimientosProt[5]);





//     //Cálculo de los mL de nutrición y redondeo a múltiplos de 50
//     mlNutricion.forEach(function(item, index, arr){
//         arr[index] = Math.round(prescripcionCal[index]/50)*50;
//     });   
//     //Cálculos de los sobre de Fresubin
//     sobresFresubin.forEach(function(item, index, arr){
//         arr[index] = (requerimientosProt[index] - prescripcionCal[index]*nutriciones[indice].corProt) / 10;
//     });

//     //Redondeo de los sobres de Fresubin
//     sobresFresubin.forEach(function(item, index, arr){
//         arr[index] = Math.round(item);
//     });

//     //Se añade el valor 5, correspondiente a los cálculos individualizados por volumen y sobres (individualizado_2)
//     mlNutricion[5] = volumenNutricion
//     sobresFresubin[5] = sobresNutricion;

//     console.log('Ml y sobres: ',mlNutricion[5],sobresFresubin[5])

//     //Calculo los datos para el campo Administrado
//     administrado.forEach(function(item, index, arr){
//         arr[index] = Math.round(mlNutricion[index] * nutriciones[indice].corCal) +
//         ' cal - ' +
//         Math.round(mlNutricion[index] * nutriciones[indice].corProt + sobresFresubin[index] * 10) +
//         ' g Prot'
//     });

//    //Redondeo de los requerimientos de Calorías y Proteina para presentación en pantalla.
//    //Se hace al final, para que los cálculos previos sean sobre datos sinredoendear
//    requerimientosCal.forEach(function(item, index, arr){
//     arr[index] = Math.round(item);
//     });
//    requerimientosProt.forEach(function(item, index, arr){
//     arr[index] = Math.round(item);
//     });

//     rellenarCampos();
// }

//     function rellenarCampos() {
//         $('.pesoValor').text(peso);
//         $('.tallaValor').text(talla);
//         $('.imcValor').text(Math.round(imc*10)/10);
//         $('.pesoIdealValor').text(Math.round(pesoIdeal*10)/10);
//         $('.pesoAjustadoValor').text(Math.round(pesoAjustado*10)/10);

//         $('.req_cal_dia_1').text(requerimientosCal[0]);
//         $('.req_cal_dia_2').text(requerimientosCal[1]);
//         $('.req_cal_dia_3').text(requerimientosCal[2]);
//         $('.req_cal_estable').text(requerimientosCal[3]);

//         $('.req_prot_dia_1').text(requerimientosProt[0]);
//         $('.req_prot_dia_2').text(requerimientosProt[1]);
//         $('.req_prot_dia_3').text(requerimientosProt[2]);
//         $('.req_prot_estable').text(requerimientosProt[3]);

//         $('.presc_mL_dia_1').text(mlNutricion[0]);
//         $('.presc_mL_dia_2').text(mlNutricion[1]);
//         $('.presc_mL_dia_3').text(mlNutricion[2]);
//         $('.presc_mL_estable').text(mlNutricion[3]);

//         $('.presc_sobres_dia_1').text(sobresFresubin[0]);
//         $('.presc_sobres_dia_2').text(sobresFresubin[1]);
//         $('.presc_sobres_dia_3').text(sobresFresubin[2]);
//         $('.presc_sobres_estable').text(sobresFresubin[3]);

//         $('.admin_dia_1').text(administrado[0]);
//         $('.admin_dia_2').text(administrado[1]);
//         $('.admin_dia_3').text(administrado[2]);
//         $('.admin_estable').text(administrado[3]);

//         //Prescripcion por calorías y proteinas
//         $('.caloriasKg').text(caloriasKg.toFixed(0));
//         $('.proteinasKg').text(proteinasKg.toFixed(1));
//         $('.presc_mL_indiv_1').text(mlNutricion[4]);
//         $('.presc_sobres_indiv_1').text(sobresFresubin[4]);
//         $('.admin_indiv_1').text(administrado[4]);
        
//         //Prescripción por mL y sobres
//         $('.presc_mL_indiv_2').text(mlNutricion[5]);
//         $('.presc_sobres_indiv_2').text(sobresFresubin[5]);
//         $('.admin_indiv_2').text(administrado[5]);

//     } 



});