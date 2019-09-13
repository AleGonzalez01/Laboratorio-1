
class Pago{
    constructor(){
        this.numeroDeTarjeta;
        this.direccion;
        this.nombreDuenoTarjeta;
        this.arregloTarjeta=[];
        this.masPosY=0;

        for(let i=0; i<2; i++){
            this.arregloTarjeta.push(new Input(310,401+this.masPosY));
            this.masPosY+=50;
        }
    }

    pintar(){
        for(let i=0; i<this.arregloTarjeta.length;i++){
            this.arregloTarjeta[i].pintarInfoTarjeta();
        }
        this.arregloTarjeta[0].muestraNormal();
        this.arregloTarjeta[1].muestraNormal();
    }
    focusInputs(mousex,mousey){
        for(let i=0; i<this.arregloTarjeta.length;i++){
            if(mousex>=this.arregloTarjeta[i].posX && mousex<=this.arregloTarjeta[i].posX+362
                && mousey>=this.arregloTarjeta[i].posY && mousey<=this.arregloTarjeta[i].posY+20){
                    this.arregloTarjeta[i].focus=true;
                }else{
                    this.arregloTarjeta[i].focus=false;
                }
        }
    }
    escribirInputs(){
        for(let i=0; i<this.arregloTarjeta.length;i++){
            if(this.arregloTarjeta[i].focus && this.arregloTarjeta[i].texto.length<42){
                this.arregloTarjeta[i].texto += key;
            }
        }
    }

    borrarInputs(){
        for(let i=0; i<this.arregloTarjeta.length;i++){
            if(this.arregloTarjeta[i].focus && this.arregloTarjeta[i].texto.length-1>=0){
                let indice=this.arregloTarjeta[i].texto.length-1;
                this.arregloTarjeta[i].texto=this.arregloTarjeta[i].texto.substr(0,indice);
            }
        }
    }


}