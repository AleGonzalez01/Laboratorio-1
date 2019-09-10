class Login{

    constructor(){
        this.arregloInputs=[];
        this.masPosY=0;
        this.correo;
        this.contrasena;

        for(let i=0; i<2; i++){
            this.arregloInputs.push(new Input(101,345+this.masPosY));
            this.masPosY+=50;
        }
    }

    pintar(){
        for(let i=0; i<this.arregloInputs.length; i++){
            this.arregloInputs[i].pintar();
        }
        this.arregloInputs[0].muestraNormal();
        this.arregloInputs[1].muestraContrasena();
    }

    focusInputs(mousex,mousey){
        for(let i=0; i<this.arregloInputs.length;i++){
            if(mousex >= this.arregloInputs[i].posX && mousex <= this.arregloInputs[i].posX+190 &&
                mousey >= this.arregloInputs[i].posY && mousey <= this.arregloInputs[i].posY+20){
                    this.arregloInputs[i].focus = true;
                }else{
                    this.arregloInputs[i].focus = false;
                }
        }
    }

    escribirInput(){
        for(let i=0; i<this.arregloInputs.length;i++){
            if(this.arregloInputs[i].focus && this.arregloInputs[i].texto.length<21){
                this.arregloInputs[i].texto += key;
            }
        }
    }

    borrarInput(){
        for(let i=0; i<this.arregloInputs.length;i++){
            if(this.arregloInputs[i].focus && this.arregloInputs[i].texto.length-1>=0){
                let indice= this.arregloInputs[i].texto.length-1;
                this.arregloInputs[i].texto =this.arregloInputs[i].texto.substr(0,indice);
            }
        }
    }
}