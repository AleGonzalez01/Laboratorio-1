let precioAdición;
let posY;
let posX;
class Adicion{
constructor(precioAdición){
    this.precioAdición = precioAdición;
    this.arregloBotonAdicion =[];
    this.posX=posX;
    this.posY=posY;
    this.posYmas=0;
    this.oton=false;
    this.enfocado=false;

    for(let i=0; i<4; i++){
        this.arregloBotonAdicion.push(614,282+this.posYmas);
        this.posYmas+=43;
    }
}

pintarBotonAdicion(){
    if(this.enfocado == true){
        for(let i=0; i<this.arregloBotonAdicion.length; i++){
            fill(0);
            ellipse(615,282,12,12);
        }
    }
    
}
/*mouseY >= 277 && mouseY <= 277+10 && mouseX >= 610 && mouseX <= 610+10 */
botonFocus(mousex,mousey){
    for(let i=0; i<this.arregloBotonAdicion.length;i++){
        if(mousex >= 277 && mousex <= 277+10 &&
            mousey >= 610 && mousey <= 610+10){
                this.arregloBotonAdicion[i].enfocado = false;
            }
        if(mousex <= 277 && mousex >= 277+10 &&
            mousey <= 610 && mousey >= 610+10){
                this.arregloBotonAdicion[i].enfocado = true;
            }
        }
    }

}