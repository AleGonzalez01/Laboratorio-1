
class Pago{
    constructor(){
        this.numeroDeTarjeta;
        this.direccion=new Input(310,235);
        this.cuotas=new Input(573,337);
        this.arregloTarjeta=[];
        this.masPosY=0;

        for(let i=0; i<2; i++){
            this.arregloTarjeta.push(new Input(310,401+this.masPosY));
            this.masPosY+=40;
        }
    }

    pintar(){
        for(let i=0; i<this.arregloTarjeta.length;i++){
            this.arregloTarjeta[i].pintarInfoTarjeta();
        }
        this.arregloTarjeta[0].muestraNormalR();
        this.arregloTarjeta[1].muestraNormalR();
        this.direccion.pintarDireccion();
        this.direccion.muestraNormalR();
        this.cuotas.pintarCuotas();
        this.cuotas.muestraNormalCuotas();
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
        if(mousex>=this.direccion.posX && mousex<=this.direccion.posX+362
            &&mousey>=this.direccion.posY && mousey<= this.direccion.posY+20){
                this.direccion.focus=true;
            }else{
                this.direccion.focus=false;
            }
        if(mousex>=this.cuotas.posX && mousex<=this.cuotas.posX+73
            &&mousey>=this.cuotas.posY && mousey<=this.cuotas.posY+14){
                this.cuotas.focus=true;
            }else{
                this.cuotas.focus=false;
            }
    }
    escribirInputs(){
        for(let i=0; i<this.arregloTarjeta.length;i++){
            if(this.arregloTarjeta[i].focus && this.arregloTarjeta[i].texto.length<42){
                this.arregloTarjeta[i].texto += key;
            }
        }
        if(this.direccion.focus &&this.direccion.texto.length<42){
            this.direccion.texto += key;
        }
        if(this.cuotas.focus && this.cuotas.texto.length<1){
            this.cuotas.texto += key;
        }
    }

    borrarInputs(){
        for(let i=0; i<this.arregloTarjeta.length;i++){
            if(this.arregloTarjeta[i].focus && this.arregloTarjeta[i].texto.length-1>=0){
                let indice=this.arregloTarjeta[i].texto.length-1;
                this.arregloTarjeta[i].texto=this.arregloTarjeta[i].texto.substr(0,indice);
            }
        }
        if(this.direccion.focus && this.direccion.texto.length-1>=0){
            let ind=this.direccion.texto.length-1;
            this.direccion.texto=this.direccion.texto.substr(0,ind);
        }
        if(this.cuotas.focus && this.cuotas.texto.length-1>=0){
            let indi=this.cuotas.texto.length-1;
            this.cuotas.texto=this.cuotas.texto.substr(0,indi);

        }
    }


}