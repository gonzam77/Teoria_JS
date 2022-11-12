class Persona {
    constructor(nombre, apellido, edad) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    } 

    get apellido() {
        return this._apellido;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }

    get edad(){
        return this._edad;
    }

    set edad(edad) {
        this._edad = edad;
    }

    nombreCompleto() {
        return this._nombre + " " + this._apellido;
    }

}

let persona1 = new Persona("Carlos", "Funez", 25);
console.log(persona1);

let persona2 = new Persona("Pedro", "Lara", 26);
console.log(persona2);

//get
console.log(persona1.nombre)

//set
persona1.nombre = "pato";
console.log(persona1);


//herencia
class Empleado extends Persona {
    constructor(nombre, apellido, edad, departamento) {
        super(nombre,apellido, edad);
        this._departamento = departamento;

    }

    get departamento() {
        return this._departamento;
    }

    set departamento(departamento) {
        this._departamento = departamento;
    }

}

let empleado1 = new Empleado("Ruben", "Garcia", 33, "Mantenimiento");
console.log(empleado1);
console.log(empleado1.departamento);
console.log(empleado1.nombreCompleto());
