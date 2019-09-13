class Registro{
    constructor(){
        this.arregloRegistro=[];
        this.masPosY=0;
        this.correo;
        this.contrasena;
        this.nombre;
        this.confirmar;

        for(let i=0; i<4; i++){
            this.arregloRegistro.push(new Input(504,246+this.masPosY));
            this.masPosY+=60;
        }
    }
    paint(){
        for(let i=0; i<this.arregloRegistro.length; i++){
           this.arregloRegistro[i].pintarRegistro();
        }
        this.arregloRegistro[0].muestraNormal();
        this.arregloRegistro[1].muestraNormal();
        this.arregloRegistro[2].muestraContrasena();
        this.arregloRegistro[3].muestraContrasena();
    }
    focusInputs(mousex, mousey){
        for(let i=0; i<this.arregloRegistro.length;i++){
            if(mousex>= this.arregloRegistro[i].posX && mousex<=this.arregloRegistro[i].posX+364 
                && mousey>= this.arregloRegistro[i].posY && mousey<=this.arregloRegistro[i].posY+30){
                    this.arregloRegistro[i].focus=true;
            }else{
                this.arregloRegistro[i].focus=false;
            }
        }
    }
    writeTextInputs(){
        for(let i=0; i<this.arregloRegistro.length;i++){
            if(this.arregloRegistro[i].focus &&this.arregloRegistro[i].texto.length<42){
                this.arregloRegistro[i].texto += key;
            }
        }
    }
    erase(){
        for(let i=0; i<this.arregloRegistro.length;i++){
            if(this.arregloRegistro[i].focus && this.arregloRegistro[i].texto.length-1>=0){
                let indice= this.arregloRegistro[i].texto.length-1;
                this.arregloRegistro[i].texto= this.arregloRegistro[i].texto.substr(0,indice);
            }
        }
    }
}