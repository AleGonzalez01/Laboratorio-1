class Usuario{
    constructor(correo, contrasena){
        this.correo=correo;
        this.contrasena= contrasena;
        
    }

    login(correo, contrasena){
        console.log(this.correo);
        console.log(this.contrasena);
        console.log(correo);
        console.log(contrasena);
        if(correo== this.correo && contrasena == this.contrasena){
            return true;
        }
        return false;
    }
  }
    
