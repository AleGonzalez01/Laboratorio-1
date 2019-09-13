let precioAdición;
let poY,tamY;
let poX,tamX;
class Adicion{
constructor(precioAdición){
    this.precioAdición = precioAdición;
    this.arregloBotonAdicion =[];
    this.poX=poX;
    this.poY=poY;
    this.posYmas=0;
    this.oton=false;
}

    pintarBotonAdicion1(){
            fill(0);
            ellipse(615,282,12,12);
    }
    pintarBotonAdicion2(){
        fill(0);
        ellipse(615,326,12,12);
    }
    pintarBotonAdicion3(){
        fill(0);
        ellipse(615,371,12,12);
    }
    pintarBotonAdicion4(){
        fill(0);
        ellipse(615,416,12,12);
    }

/*mouseY >= 277 && mouseY <= 277+10 && mouseX >= 610 && mouseX <= 610+10 
botonFocus(mousex,mousey){  44
    for(let i=0; i<this.arregloBotonAdicion.length;i++){
        if(mousex >= 277 && mousex <= 277+100 &&
            mousey >= 610 && mousey <= 610+100){
                this.arregloBotonAdicion[i].enfocado = true;
            }
        if(mousex <= 277 && mousex >= 277+100 &&
            mousey <= 610 && mousey >= 610+100){
                this.arregloBotonAdicion[i].enfocado = false;
            }
        }
    }*/

}



