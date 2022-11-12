//tipo de dato string
var nombre = "topo";
console.log(typeof nombre);

nombre = true;
console.log(typeof nombre);

// tipo de dato numérico
var numero = 22;
console.log(numero);

// tipo de dato object

var objeto = {
    nombre:"Juan",
    apellido: "Lopez",
    telefono: "4564321"
}

console.log(typeof objeto);

// tipo de dato boolean (true, false)

var bandera = true;
console.log(bandera);
console.log(typeof bandera);


// tipo de dato function

function funcion() {
    return console.log("hola");
}

funcion();
console.log(typeof funcion());

//tipo de dato symbol

var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);
console.log(simbolo);

// tipo de dato clase

class Persona {
    constructor(nombre, apellido) {
     this.nombre = nombre;
     this.apellido = apellido;   
    }
}
persona = new Persona("gonzalo", "medina");
console.log(persona);

//tipo de dato undefined

var x;
console.log(x);
console.log(typeof x);
x = undefined;
console.log(x);
console.log(typeof x);


//tipo de dato null
var y = null;
console.log(y);
console.log(typeof y);

// arreglos

var autos = ['bmw', 'audi', 'volvo'];
console.log(autos);
console.log(typeof autos);

// datos vacios

let string = '';
console.log(string);
console.log(typeof string);
let array = [];
console.log(array);
let object = {};
console.log(object);






