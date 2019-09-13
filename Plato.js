
class Plato{
    constructor(){
        this.cantidad= new Input(742,423);
        
    }

    pintar(){
        this.cantidad.pintarCantidad();
        this.cantidad.muestraNormalCantidad();
    }
    focusInputs(mousex,mousey){
        if(mousex>=this.cantidad.posX && mousex<=this.cantidad.posX+97 &&
            mousey>=this.cantidad.posY && mousey<=this.cantidad.posY+16){
                this.cantidad.focus=true;
            }else{
                this.cantidad.focus=false;
            }
    }
    escribirInput(){
        if(this.cantidad.focus && this.cantidad.texto.length<1){
            this.cantidad.texto += key;
        }
    }
    borrarInput(){
        if(this.cantidad.focus && this.cantidad.texto.length-1>=0){
            let indice= this.cantidad.texto.length-1;
            this.cantidad.texto=this.cantidad.texto.substr(0,indice);
        }
    }
}