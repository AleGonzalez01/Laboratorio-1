class Input{
    constructor(posX,posY){
        this.posX=posX;
        this.posY=posY;
        this.focus=false;
        this.texto="";
    }

    pintar(){
        if(this.focus){
            noStroke();
        }else{
            noStroke();
        }
        fill(56,34,65);
        rect(this.posX,this.posY,180,18);
    }
    pintarInfoTarjeta(){
        if(this.focus){
            noStroke();
        }else{
            noStroke();
        }
        fill(56,34,65);
        rect(this.posX,this.posY,310,18);
    }

    pintarRegistro(){
        if(this.focus){
            noStroke();
        }else{
            noStroke();
        }
        fill(56,34,65);
        rect(this.posX,this.posY,363,27);
    }
    pintarCantidad(){
        if(this.focus){
            stroke(255,30,113);
        }else{
            noStroke();
        }
        fill(255);
        rect(this.posX,this.posY,97,16);
    }
    pintarDireccion(){
        if(this.focus){
            noStroke();
        }else{
            noStroke();
        }
        fill(56,34,65);
        rect(this.posX,this.posY,310,18);
    }
    pintarCuotas(){
        if(this.focus){
            stroke(255,30,113);
        }else{
            noStroke();
        }
        fill(255);
        rect(this.posX,this.posY,71,14);
    }

    muestraContrasena(){
        let asteriscos="";
        for(let i=0; i<this.texto.length; i++){
            asteriscos += "*";
        }
        fill(255);
        textSize(16);
        text(asteriscos,this.posX+5,this.posY+15);
    }
    muestraContrasenaR(){
        let asteriscos="";
        for(let i=0; i<this.texto.length; i++){
            asteriscos += "*";
        }
        fill(255);
        textSize(16);
        text(asteriscos,this.posX+5,this.posY+30);
    }

    muestraNormalCantidad(){
        fill(0);
        noStroke();
        text(this.texto,this.posX+5,this.posY+11);
    }
    muestraNormalCuotas(){
        fill(0);
        textSize(12);
        noStroke();
        text(this.texto,this.posX+5,this.posY+11);
    }

    muestraNormal(){
        fill(255);
        textSize(16);
        text(this.texto,this.posX+5,this.posY+10);
    }
    muestraNormalR(){
        fill(255);
        textSize(16);
        text(this.texto,this.posX+5,this.posY+20);
    }
}
