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

    pintarRegistro(){
        if(this.focus){
            noStroke();
        }else{
            fill(56,34,65);
            rect(this.posX,this.posY,363,27);
        }
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
