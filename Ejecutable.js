let tiposU; 
//imagenes
let img1,img2,img3,img4,img5;
let img6,img7,img8,img9,img10;
let img11,img12,img13,img14,img15;
let img16,img17,img18,img19,img20,img21,img22,img23,img24;
let img25,img26,img27,img28,img29,img30,img31,img32,img33,img34;
let img35,img36,img37,img38,img39,img40,img41,img42,img43,img44,img45,img46,img47;
//
let pantalla;
let plato1;
let plato2;
let plato3;
let plato4;
let precioPlato1;
let precioPlato2;
let precioPlato3;
let precioPlato4;
let papas;
let limonada;
let churros;
let panDeMuerto;


function setup(){
    
    createCanvas(960,610);

    //IMAGENES DE LA PANTALLA 
    //LONGING
    img1 = loadImage('objetos/1fondopantallainicio.png');
    img2 = loadImage('objetos/1fotoquesadillapantallainicio.png');
    img3 = loadImage('objetos/1corconpantallainicio.png');
    img4 = loadImage('objetos/1compartePantallainicio.png');
    //LOGO
    img5 = loadImage('objetos/1logoPantallainicio.png');

    //REGISTRO
    img6 = loadImage('objetos/2fototacoPantallaregistro.png');
    img7 = loadImage('objetos/2FondoPantalla registro.png');
    img8 = loadImage('objetos/2creatucuentaPantallaregistro.png');
    img9 = loadImage('objetos/2nomcorconPantallaregistro.png');
    img10 = loadImage('objetos/2loginPantallaregistro.png');

    //MENU
    img11 = loadImage('objetos/3fondoPantallaplatos.png');
    img14 = loadImage('objetos/3burritoPantallaplatos.png');
    img13 = loadImage('objetos/3quesadillaPantallaplatos.png');
    img12 = loadImage('objetos/3nachosPantallaplatos.png');
    img15 = loadImage('objetos/3tacosPantallaplatos.png');

    //MISMO FONDO PARA TODAS LAS COMIDAS
    img16 = loadImage('objetos/4fondoPantalladescripcioncomida.png');

    //TACOS
    img17 = loadImage('objetos/4fotostacosPantalladescripcioncomida.png');
    img18 = loadImage('objetos/4tacosPantalladescripcioncomida.png');

    //QUESADILLA
    img19 = loadImage('objetos/4fotosquesadillaPantalladescripcioncomida.png');
    img20 = loadImage('objetos/4quesadillaPantalladescripcioncomida.png');

    //BURRITOS
    img21 = loadImage('objetos/4fotosburritoPantalladescripcioncomida.png');
    img22 = loadImage('objetos/4burritoPantalladescripcioncomida.png');

    //NACHOS
    img23 = loadImage('objetos/4fotosnachosPantalladescripcioncomida.png');
    img24 = loadImage('objetos/4nachosPantalladescripcioncomida.png');

    //ADICIONES
    img25 = loadImage('objetos/5fondoPantallaadiciones.png');
    img26 = loadImage('objetos/5fotoschurroPantallaadiciones.png');
    img27 = loadImage('objetos/5textoPantallaadiciones.png');
    img28 =  loadImage('objetos/.png')

    //TU PAGO
    img32 = loadImage('objetos/7fondoPantallapagocondireccion.png');
    img33 = loadImage('objetos/7textoPantallapagocondireccion.png');
    img34 = loadImage('objetos/7botonpagarPantalla pago con direccion.png');

    //BUENO
    img35 = loadImage('objetos/8fondoPantallapagobueno.png');
    img36 = loadImage('objetos/8textoPantallapagobueno.png');
    img37 = loadImage('objetos/8botonPantallapagobueno.png');

    //MALO
    img38 = loadImage('objetos/9fondoPantallapagomalo.png');
    img39 = loadImage('objetos/9textoPantallapagomalo.png');
    img40 = loadImage('objetos/9botonPantallapagomalo.png');

    //RESUMEN
    img41 = loadImage('objetos/6fondoPantallaresumen.png');
    img42 = loadImage('objetos/6textoPantallaresumen.png');
    //img43 = loadImage('objetos/.png');

    //HISTORIAL
    img43 = loadImage('objetos/10fondoPantallahistorial.png');
    img44 = loadImage('objetos/10tacosfotoPantallahistorial.png');
    img45 = loadImage('objetos/10quesadillafotoPantallahistorial.png');
    img46 = loadImage('objetos/10burritofotoPantallahistorial.png');
    img47 = loadImage('objetos/10nachosfotoPantallahistorial.png');
    
}
function draw(){
    background(200);
switch(pantalla=12){
    case 0:
        //LOGIN
        image(img1, 0, 0, 387, 610);
        image(img2,383,0,576,610);
        image(img3,75,350,224,75);
        image(img4,670,500,242,83);
        image(img5,120,150,140,145);
        image(img10,134,500,105,38);
        break;
    case 1:
        //REGISTRO
        image(img6,0,0,390,610);
        image(img7,390,0,572,610);
        image(img8,40,450,191,149);
        image(img5,625,100,91,94);
        image(img9,480,250,387,214);
        image(img10,616,500,105,38);
        break;
    case 2:
        //MENU
        image(img11,0,0,960,610);
        image(img12,510,225,255,150);
        image(img13,210,395,255,150);
        image(img14,510,395,255,150);
        image(img15,210,225,255,150);
        break;
    case 3:
        //TACOS
        image(img16,0,0,960,610);
        image(img17,80,175,475,355);
        image(img18,620,200,275,320);
        break;
    case 4:
        //QUESADILLA
        image(img16,0,0,960,610); 
        image(img19,80,175,475,355);
        image(img20,620,200,275,320);   
        break;
    case 5:
        //BURRITO
        image(img16,0,0,960,610);
        image(img21,80,175,475,355);
        image(img22,620,200,275,320);
        break;
    case 6:
        //NACHOS
        image(img16,0,0,960,610);
        image(img23,80,175,475,355);
        image(img24,620,200,275,320);
        break;
    case 7:
        //ADICCIONES
        image(img25,0,0,960,610);
        //image(img26,0,0,960,610);
        //image(img27,620,200,275,320);
        break;
    case 8:
        //PAGO
        image(img32,0,0,960,610);
        //image(img33,0,0,960,610);
        //image(img34,0,0,960,610);
        break;
    case 9:
        //BUENO
        image(img35,0,0,960,610);
        //image(img36,0,0,960,610);
        //image(img37,0,0,960,610);
        break;
    case 10:
        //MALO
        image(img38,0,0,960,610);
        //image(img39,0,0,960,610);
        //image(img40,0,0,960,610);
        break;
    case 11:
        //RESUMEN
        image(img41,0,0,960,610);
        //image(img42,0,0,960,610);
        break;
    case 12:
        //HISTORIAL
        image(img43,0,0,960,610);
        //IMAGENES DE LOS PLATOS
        //image(img44,100,0,960,610);
        //image(img45,100,0,960,610);
        //image(img46,0,0,960,610);
        //image(img47,0,0,960,610);
        break;
}

}
function mousePressed(){

}
function pagar(){

}