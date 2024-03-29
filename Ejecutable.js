let pantalla;
let resumenPedido;
let plato1,plato2,plato3,plato4;
let tiempo;
var arregloUsuarios=[];
let img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23,img24,img25, im26;

function setup(){

    createCanvas(960,610);
    pantalla=0;

    aviso= false;

    oton = false;
    oton2 = false;
    oton3 = false;
    oton4 = false;

    pagoDeb = false;
    pagoCre = false;

    taco = false;
    burrito = false;
    quesadilla = false;
    nachos = false;

    tiempo = 60;
    moneda= "";
    precio="";

    //ARREGLOS
    //CON LA CLASE USUARIO
    usuario1= new Usuario ("mariaf@gmail.com","12345");
    //CON LA CLASE LOGIN
    login= new Login();
    //CON LA CLASE REGISTRO
    registro= new Registro();
    //CON LA CLASE PLATO
    plato=new Plato();
    //CON LA CLASE PAGO
    pago= new Pago();
    //CON LA CLASE ADICION
    boton = new Adicion();
    boton2 = new Adicion();

     //Arreglo de usuarios para agregar
     var usuariosGuardados = localStorage.getItem('usuarios');
     if(usuariosGuardados){
         arregloUsuarios = JSON.parse(usuariosGuardados);
     }
    
    //IMAGENES
    //LOGIN
    img1 = loadImage('objetos/1corconpantallainicio.png');
    img2 = loadImage('objetos/2loginPantallaregistro.png');

    //REGISTRO
    img3 = loadImage('objetos/2registroPantallaresumen.png');
    img26 = loadImage('objetos/2creatucuentaPantallaregistro.png');

    //MENU
    img4 = loadImage('objetos/3fondoPantallaplatos.png');
    img5 = loadImage('objetos/3tacosPantallaplatos.png');
    img6 = loadImage('objetos/3quesadillaPantallaplatos.png');
    img7 = loadImage('objetos/3burritoPantallaplatos.png');
    img8 = loadImage('objetos/3nachosPantallaplatos.png');

    //PLATOS
    //BOTON COMPRAR YA
    img9 = loadImage('objetos/4botonPantalladescripcioncomida.png');

    //TACOS
    img10 = loadImage('objetos/4tacosPantalladescripcioncomida.png');

    //QUESADILLA
    img11 = loadImage('objetos/4quesadillaPantalladescripcioncomida.png');

    //BURRITOS
    img12 = loadImage('objetos/4burritoPantalladescripcioncomida.png');

    //NACHOS
    img13 = loadImage('objetos/4nachosPantalladescripcioncomida.png');

    //ADICCIONES
    img14 = loadImage('objetos/5fondoPantallaadiciones.png');
    img15 = loadImage('objetos/5botonPantallaadiciones.png');

    //PAGO
    img16 = loadImage('objetos/6fondoPantallapagodireccion.png');
    img17 = loadImage('objetos/6botonpagarPantalla pago con direccion.png');

    //BUENO
    img18 = loadImage('objetos/7fondoPantallapagobueno.png');
    img19 = loadImage('objetos/7botonPantallapagobueno.png');

    //MALO
    img20 = loadImage('objetos/8fondoPantallapagomalo.png');
    img21 = loadImage('objetos/8botonPantallapagomalo.png');

    //RESUMEN
    img22 = loadImage('objetos/9fondoPantallaresumen.png');
    img23 = loadImage('objetos/9botonPantallaresumen.png');

    //HISTORIAL
    img24 = loadImage('objetos/10fondoPantallahistorial.png');
    imag25 = loadImage('objetos/10iconodineroPantallahistorial.png');
    plato1 = loadImage('objetos/10tacosfotoPantallahistorial.png');
    plato2 = loadImage('objetos/10burritofotoPantallahistorial.png');
    plato3 = loadImage('objetos/10quesadillafotoPantallahistorial.png');
    plato4 = loadImage('objetos/10nachosfotoPantallahistorial.png');
    //img= loadImage('objetos/.png');
}

function draw(){
    switch(pantalla){
    case 0:
        //LOGIN
        image(img1, 0, 0, 960, 610);
        image(img2,144,520,105,38);
        login.pintar();
        /*if(usuario1.correo!= login.arregloInputs[0].texto && 
            usuario1.contrasena!= login.arregloInputs[1].texto)*/
                
        
        break;
    case 1:
        //REGISTRO
        image(img3,0,0,960,610);
        image(img2,616,520,105,38);
        image(img26,40,450,191,149);
        registro.paint();
        break;
    case 2:
        //MENU
        image(img4,0,0,960,610);
        image(img7,510,225,255,150);
        image(img6,210,395,255,150);
        image(img8,510,395,255,150);
        image(img5,210,225,255,150);
        break;
    case 3:
        //TACOS
        image(img10,0,0,960,610);
        image(img9,653,478,216,40);
        plato.pintar();
        break;
    case 4:
        //QUESADILLA
        image(img11,0,0,960,610);
        image(img9,653,478,216,40);
        plato.pintar();
        break;
    case 5:
        //BURRITOS
        image(img12,0,0,960,610);
        image(img9,653,478,216,40);
        plato.pintar();
        break;
    case 6:
        //NACHOS
        image(img13,0,0,960,610);
        image(img9,653,478,216,40);
        plato.pintar();
        break;
    case 7:
        //ADICIONES
        image(img14,0,0,960,610);
        image(img15,563,452,218,41);
        if(oton == true){
            boton.pintarBotonAdicion1();
        }
        if(oton2 == true){
            boton.pintarBotonAdicion2();
        }
        if(oton3 == true){
            boton.pintarBotonAdicion3();
        }
        if(oton4 == true){
            boton.pintarBotonAdicion4();
        }
        break;
    case 8:
        //PAGO
        image(img16,0,0,960,610);
        image(img17,420,510,104,37);
        pago.pintar();
        if(pagoDeb == true){
            pago.pintarBotondebito();
        }
        if(pagoCre == true){
            pago.pintarBotonCredito();
        }
        break;
    case 9:
        //BUENO
        image(img18,0,0,960,610);
        image(img19,370,450,222,37);
        break;
    case 10:
        //MALO
        image(img20,0,0,960,610);
        image(img21,370,450,222,37);
        break;
    case 11:
        //RESUMEN
        image(img22,0,0,960,610);
        image(img23,435,450,104,37);
        fill(0);
        textSize(20);
        text("Resumen Pedido",410,265);
        text (tiempo+" "+ "minutos",459, 428);
        text(moneda, 456,370);
        fill(0);
        text(precio, 520, 370);
        
        break;
    case 12:
        //HISTORIAL
        image(img24,0,0,960,610);
        if(taco == true){
            image(plato1,290,222,410,300);
        }
        if(quesadilla == true){
            image(plato3,290,222,410,300);
        }
        if(burrito == true){
            image(plato2,290,222,410,300);
        }
        if(nachos == true){
            image(plato4,290,222,410,300);
        }
        break;
    }
    /* fill(0);
    textSize(10);
        text("X: " +mouseX+ "Y" +mouseY,mouseX,mouseY);*/
    
}

function keyPressed(){
    switch (pantalla){
        case 0: 
        if(keyCode != 8 && keyCode !=17 && keyCode !=18 && keyCode != 20){
            login.escribirInput();
        }else if(keyCode == 8){
            login.borrarInput();
        }
            break;

        case 1:
            if(keyCode != 8 && keyCode !=17 && keyCode !=18 && keyCode != 20){
                registro.writeTextInputs();
            }else if(keyCode == 8){
                registro.erase();
            }
            break;
        case 3:
                if(keyCode != 8 && keyCode !=17 && keyCode !=18 && keyCode != 20){
                    plato.escribirInput();
                }else if(keyCode == 8){
                    plato.borrarInput();
                }
                break;
        case 4:
                if(keyCode != 8 && keyCode !=17 && keyCode !=18 && keyCode != 20){
                    plato.escribirInput();
                }else if(keyCode == 8){
                    plato.borrarInput();
                }
                break;
        case 5:
                if(keyCode != 8 && keyCode !=17 && keyCode !=18 && keyCode != 20){
                    plato.escribirInput();
                }else if(keyCode == 8){
                    plato.borrarInput();
                }
                break;
        case 6:
                if(keyCode != 8 && keyCode !=17 && keyCode !=18 && keyCode != 20){
                    plato.escribirInput();
                }else if(keyCode == 8){
                    plato.borrarInput();
                }
                break;
        case 8: 
        if(keyCode != 8 && keyCode !=17 && keyCode !=18 && keyCode != 20){
            pago.escribirInputs();
        }else if(keyCode == 8){
            pago.borrarInputs();
        }
        break;

    }
}

function mousePressed(){
    switch(pantalla){
        case 0:
            login.focusInputs(mouseX,mouseY);

            //LOGIN
           //login.validarDatos(); 
           if (mouseY >= 520  && mouseY <= 520+38 && mouseX >=144 && mouseX<=144+105){
                if(usuario1.correo== login.arregloInputs[0].texto && 
                    usuario1.contrasena== login.arregloInputs[1].texto){
                    pantalla=2;
                    login.arregloInputs[0].texto= "";
                    login.arregloInputs[1].texto="";
                    login.alerta=false;
                } else{
                    login.alerta=true;
                }
            }
            //IR A REGISTRO 231
            if (mouseY >= 483  && mouseY <= 483+14 && mouseX >=154 && mouseX<=154+77){
                pantalla=1;
            }
            break;
        case 1:
            //REGISTRO
            registro.focusInputs(mouseX,mouseY);
            if (mouseY >= 520  && mouseY <= 520+38 && mouseX >=616 && mouseX<=616+105){
                pantalla=2;
                //INTENTO DE AGREGAR pero sale error. igual deja pasar a la otra pantalla
                var user = new Usuario(correo,contrasena,nombre,confirmar);
                arregloUsuarios.push(user);

                nombre=' ';
                localStorage.setItem('usuarios', JSON.stringify(usuarios));
            }
            break;
        case 2:
            //BARRA SUPERIOR
            if(mouseY >= 22 && mouseY <= 22+13 && mouseX >=606 && mouseX <= 606+40){
                pantalla = 2;
            }
            if(mouseY >= 22 && mouseY <= 22+13 && mouseX >=717 && mouseX <= 717+56){
                pantalla = 12;
            }
            if(mouseY >= 22 && mouseY <= 22+13 && mouseX >=840 && mouseX <= 840+82){
                pantalla = 0;
            }
            //PLATOS
            if(mouseY >= 225 && mouseY <= 225+150 && mouseX >=510 && mouseX <= 510+255){
                pantalla = 5;
            }
            if(mouseY >= 395 && mouseY <=395+150 && mouseX >=210 && mouseX <= 210+255){
                pantalla = 4;
            }
            if(mouseY >= 395 && mouseY <= 395+150 && mouseX >=510 && mouseX <= 510+255){
                pantalla = 6;
            }
            if(mouseY >= 225 && mouseY <= 225+150 && mouseX >=210 && mouseX <= 210+255){
                pantalla = 3;
            }
            break;
        case 3:
            //BARRA SUPERIOR
            if(mouseY >= 22 && mouseY <= 22+13 && mouseX >=606 && mouseX <= 606+40){
                pantalla = 2;
            }
            if(mouseY >= 22 && mouseY <= 22+13 && mouseX >=717 && mouseX <= 717+56){
                pantalla = 12;
            }
            if(mouseY >= 22 && mouseY <= 22+13 && mouseX >=840 && mouseX <= 840+82){
                pantalla = 0;
            }
            //TACOS
            plato.focusInputs(mouseX,mouseY);
                //PAGAR DE UNA VEZ
            if(mouseY >= 477 && mouseY <= 477+120 && mouseX >= 563 && mouseX <= 563+305){
                pantalla = 8;
                moneda=13000;
                taco = true;
            }else{
                moneda="";
                taco = true;
            }
                //AGREGAR ADICCIONES
            if(mouseY >= 405 && mouseY <= 405+11 && mouseX >= 712 && mouseX <= 712+79){
                pantalla = 7;
                moneda=13000;
            }
            break;
        case 4:
            //BARRA SUPERIOR
            if(mouseY >= 22 && mouseY <= 22+13 && mouseX >=606 && mouseX <= 606+40){
                pantalla = 2;
            }
            if(mouseY >= 22 && mouseY <= 22+13 && mouseX >=717 && mouseX <= 717+56){
                pantalla = 12;
            }
            if(mouseY >= 22 && mouseY <= 22+13 && mouseX >=840 && mouseX <= 840+82){
                pantalla = 0;
            }
            //QUESADILLA
            plato.focusInputs(mouseX,mouseY);
            //PAGAR DE UNA VEZ
            if(mouseY >= 477 && mouseY <= 477+120 && mouseX >= 563 && mouseX <= 563+305){
                pantalla = 8;
                moneda=9000;
                quesadilla = true;
            }else{
                moneda="";
                quesadilla = true;
            }
                //AGREGAR ADICCIONES
            if(mouseY >= 405 && mouseY <= 405+11 && mouseX >= 712 && mouseX <= 712+79){
                pantalla = 7;
                moneda=9000;
            }
            break;
        case 5:
            //BARRA SUPERIOR
            if(mouseY >= 22 && mouseY <= 22+13 && mouseX >=606 && mouseX <= 606+40){
                pantalla = 2;
            }
            if(mouseY >= 22 && mouseY <= 22+13 && mouseX >=717 && mouseX <= 717+56){
                pantalla = 12;
            }
            if(mouseY >= 22 && mouseY <= 22+13 && mouseX >=840 && mouseX <= 840+82){
                pantalla = 0;
            }
            //BURRITOS
            plato.focusInputs(mouseX,mouseY);
            //PAGAR DE UNA VEZ
            if(mouseY >= 477 && mouseY <= 477+120 && mouseX >= 563 && mouseX <= 563+305){
                pantalla = 8;
                moneda=12000;
                burrito = true;
            }else{
                moneda="";
                burrito = true;
            }
                //AGREGAR ADICCIONES
            if(mouseY >= 405 && mouseY <= 405+11 && mouseX >= 712 && mouseX <= 712+79){
                pantalla = 7;
                moneda=12000;
            }
            break;
        case 6:
            //BARRA SUPERIOR
            if(mouseY >= 22 && mouseY <= 22+13 && mouseX >=606 && mouseX <= 606+40){
                pantalla = 2;
            }
            if(mouseY >= 22 && mouseY <= 22+13 && mouseX >=717 && mouseX <= 717+56){
                pantalla = 12;
            }
            if(mouseY >= 22 && mouseY <= 22+13 && mouseX >=840 && mouseX <= 840+82){
                pantalla = 0;
            }
            //NACHOS
            plato.focusInputs(mouseX,mouseY);
            //PAGAR DE UNA VEZ
            if(mouseY >= 477 && mouseY <= 477+120 && mouseX >= 563 && mouseX <= 563+305){
                pantalla = 8;
                moneda=17000;
                nachos = true;
            }else{
                moneda="";
            }
                //AGREGAR ADICCIONES
            if(mouseY >= 405 && mouseY <= 405+11 && mouseX >= 712 && mouseX <= 712+79){
                pantalla = 7;
                moneda=17000;
                nachos = true;
            }
            break;
        case 7:
            //BARRA SUPERIOR
            if(mouseY >= 22 && mouseY <= 22+13 && mouseX >=606 && mouseX <= 606+40){
                pantalla = 2;
            }
            if(mouseY >= 22 && mouseY <= 22+13 && mouseX >=717 && mouseX <= 717+56){
                pantalla = 12;
            }
            if(mouseY >= 22 && mouseY <= 22+13 && mouseX >=840 && mouseX <= 840+82){
                pantalla = 0;
            }
            //ADICIONES
            if(mouseY >= 452 && mouseY <= 452+41 && mouseX >= 563 && mouseX <= 563+218){
                pantalla = 8;
            }

            //BOTON
            
            if(mouseX >= 610 && mouseX <= 610+10 && mouseY >= 277 && mouseY <= 277+10 && oton2==false && oton3==false && oton4==false){
                oton = true;
                precio= "+ 3000";
            } 

            if(mouseX >= 610 && mouseX <= 610+10 && mouseY >= 322 && mouseY <= 322+10 &&oton1==false && oton3==false && oton4==false){
                oton2 = true;
                precio= "+ 4000";
            }
            
            if(mouseX >= 610 && mouseX <= 610+10 && mouseY >= 367 && mouseY <= 367+10 && oton2==false && oton1==false && oton4==false){
                oton3 = true;
                precio= "+ 3000";
            }

            if(mouseX >= 610 && mouseX <= 610+10 && mouseY >= 412 && mouseY <= 412+10 &&oton2==false && oton3==false && oton1==false){
                oton4 = true;
                precio= "+ 5000"
            }

            break;
        case 8:
            //BARRA SUPERIOR
            if(mouseY >= 22 && mouseY <= 22+13 && mouseX >=606 && mouseX <= 606+40){
                pantalla = 2;
            }
            if(mouseY >= 22 && mouseY <= 22+13 && mouseX >=717 && mouseX <= 717+56){
                pantalla = 12;
            }
            if(mouseY >= 22 && mouseY <= 22+13 && mouseX >=840 && mouseX <= 840+82){
                pantalla = 0;
            }
            //PAGO
            pago.focusInputs(mouseX,mouseY);

            if(mouseY >= 510 && mouseY <= 510+37 && mouseX >= 440 && mouseX <= 440+104){
                //si los campos no están rellenos te dará error en el pago
            if(this.pago.direccion.texto=="" || this.pago.cuotas.texto==""){
                pantalla=10;
            }
            if(this.pago.direccion.texto!="" || this.pago.cuotas.texto!=""){
                pantalla=9;
            }
            }
            //BOTON
            if(mouseX >= 424 && mouseX <= 424+10 && mouseY >= 30 && mouseY <= 305+10 && pagoCre== false){
                pagoDeb = true;
            }

            if(mouseX >= 424 && mouseX <= 424+10 && mouseY >= 338 && mouseY <= 338+10 && pagoDeb == false){
                pagoCre = true;
            }
            break;
        case 9:
            //BARRA SUPERIOR
            if(mouseY >= 22 && mouseY <= 22+13 && mouseX >=606 && mouseX <= 606+40){
                pantalla = 2;
            }
            if(mouseY >= 22 && mouseY <= 22+13 && mouseX >=717 && mouseX <= 717+56){
                pantalla = 12;
            }
            if(mouseY >= 22 && mouseY <= 22+13 && mouseX >=840 && mouseX <= 840+82){
                pantalla = 0;
            }
            //BUENO 
            if(mouseY >= 450 && mouseY <= 450+37 && mouseX >= 370 && mouseX <= 370+222){
                pantalla = 11;
            }
            break;
        case 10:
            //BARRA SUPERIOR
            if(mouseY >= 22 && mouseY <= 22+13 && mouseX >=606 && mouseX <= 606+40){
                pantalla = 2;
            }
            if(mouseY >= 22 && mouseY <= 22+13 && mouseX >=717 && mouseX <= 717+56){
                pantalla = 12;
            }
            if(mouseY >= 22 && mouseY <= 22+13 && mouseX >=840 && mouseX <= 840+82){
                pantalla = 0;
            }
            //MALO 
            if(mouseY >= 450 && mouseY <= 450+37 && mouseX >= 370 && mouseX <= 370+222){
                pantalla = 8;
            }
            break;
        case 11:
            //BARRA SUPERIOR
            if(mouseY >= 22 && mouseY <= 22+13 && mouseX >=606 && mouseX <= 606+40){
                pantalla = 2;
            }
            if(mouseY >= 22 && mouseY <= 22+13 && mouseX >=717 && mouseX <= 717+56){
                pantalla = 12;
            }
            if(mouseY >= 22 && mouseY <= 22+13 && mouseX >=840 && mouseX <= 840+82){
                pantalla = 0;
            }
            //RESUMEN
            if(mouseY >= 450 && mouseY <= 450+37 && mouseX >= 435 && mouseX <= 435+104){
                pantalla = 12;

            }
            break;
        case 12:
            //BARRA SUPERIOR
            if(mouseY >= 22 && mouseY <= 22+13 && mouseX >=606 && mouseX <= 606+40){
                pantalla = 2;
            }
            if(mouseY >= 22 && mouseY <= 22+13 && mouseX >=717 && mouseX <= 717+56){
                pantalla = 12;
            }
            if(mouseY >= 22 && mouseY <= 22+13 && mouseX >=840 && mouseX <= 840+82){
                pantalla = 0;
            }
            //HISTORIAL
            break;
    }
}
/*function getRandomArbitrary(min,max){
    return Math.random * (max-min) + min;
}

function getRandomInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +100)) +min;
}*/