class Empleado {
    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    obtenerDetalles() {
        return `Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}

class Gerente extends Empleado {
    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo);
        this.departamento = departamento;
    }
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()}, depto: ${this.departamento}`;
    }
}

let gerente1 = new Gerente("Carlos", 5000, "Gerencia");
console.log(gerente1.obtenerDetalles());

let empleado1 = new Empleado("Roberto", 2500);
console.log(empleado1);


//polimorfismo (en este caso una linea va a comportarse de manera distinta segun la clase de objeto que le estemos pasando)

function imprimir(tipo) {
    console.log(tipo.obtenerDetalles());
    if (tipo instanceof Gerente) {
        console.log("Es un objeto de tipo Gerente");
        console.log(tipo.departamento);
    } else if(tipo instanceof Empleado) {
        console.log("Es un objeto de tipo Empleado");
    } else if (tipo instanceof Object) {
        console.log("Es un objeto de tipo Object");
    }
}

imprimir(empleado1);
imprimir(gerente1);

//instanceOf nos muestra de que tipo es el objeto que estamos mostrando

function imprimir2(tipo) {
    console.log(tipo.obtenerDetalles());
    
}