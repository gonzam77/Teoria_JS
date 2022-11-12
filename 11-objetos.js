let persona = {
    nombre: "Gonzalo",
    apellido: "Medina",
    edad: 33,
    email: "gonzam77@gmail.com"
}

console.log(persona);
console.log(persona.nombre);
console.log(persona['edad']);

// dot notation y brackets notation
function agregarAtributo(property, objeto) {
    objeto[property] = "nueva propiedad a";
    objeto.property = "nueva propiedad 2";
}
agregarAtributo("propiedadNueva", persona);
console.log(persona);

//agregar metodo al objeto
persona.nombreCompleto = function(){
    return this.nombre + " " + this.apellido;
};
console.log(persona.nombreCompleto());


//OTRA FORMA DE CREAR OBJETOS / en desuso
let persona2 = new Object();
persona2.nombre = "Carlos";
persona2["apellido"] = "Lopez";
persona2.email = "carlitox@gmail.com";
console.log(persona2)

//recorrer objetos con 'for in'
//nombrePropiedad = propiedad
//persona[nombrePropiedad] = valor
for (nombrePropiedad in persona2){
    console.log(nombrePropiedad);
    console.log(persona2[nombrePropiedad])
}

//eliminar una propiedad
console.log(persona);
delete persona.property;
delete persona.propiedadNueva;
console.log(persona);

//FORMAS DE MOSTRAR OBJETOS
//por propiedad 'dot notation' y 'brakets notation'
console.log(persona.nombre + ", " + persona.apellido);
// for in
for (nombrePropiedad in persona) {
   console.log(persona[nombrePropiedad]); 
}
//Object.values
let personaArray = Object.values(persona);
console.log (personaArray);

//JSON.stringify
let personaString = JSON.stringify(persona);
console.log(personaString);

//metodos getter y settter

let objeto = {
    propiedad1: 255,
    idioma: "es",
    // devolvemos el valor en mayusculas
    get lang(){
        return this.idioma.toUpperCase();
    },
    // seteamos el idioma a mayusculas
    set lang(lang) {
        this.idioma = lang.toUpperCase();
    }, 
    propiedad3: true,
    propiedad4: function() {
        return "Esta es lña propiedad 4";
    },
    get propiedad5() {
        return "esta es la propiedad 5";
    }
}

console.log(objeto.propiedad4());
console.log(objeto.propiedad5)// ya no necesita parentesis por el get
console.log(objeto.lang);

objeto.lang = "en";

//constructor de objetos

function Persona(nombre = "desconocido", apellido = "desconocido", edad = "desconocida") {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }

} 

let padre = new Persona("Juan", "Perez");
console.log(padre);

let madre = new Persona("Susana", "Horia", 48);
console.log(madre);

padre.edad = 56;
console.log(padre);
console.log(padre.nombreCompleto());
console.log(madre.nombreCompleto());

//distintas formas de crear objetos

let miObjeto = new Object(); //mas formal
let miObjeto2 = {}; //mas frecuente
let miCadena = new String("hola");
let miCadena2 = "hola";
let miNumero = new Number(10);
let miNumero2 = 10;
let miBoolean = new Boolean(false);
let miBoolean2 = false;
let miArray = new Array();
let miArray2 = [];
let miFuncion = new Function();
let miFuncion2 = function(){};


        //prototype
//  si agrego una nueva propiedad al objeto padre, esta propiedad solo 
//  puede ser usada por el objeto padre

padre.email = "padre@gmail.com";
console.log(padre);
console.log(padre.email);

//  para agregar una propiedad a todos los objetos podemos usar el prototype

Persona.prototype.direccion = "Av. siempreviva 123";

console.log(madre.direccion);
console.log(padre.direccion);
padre.direccion = "Isla solitaria";
console.log(padre.direccion);

//metodo call
//llamar al metodo de un objeto desde otro objeto

let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

let persona33 = {
    nombre: "Juancho",
    apellido: "Pereira"
}

console.log(persona1.nombreCompleto());
console.log(persona1.nombreCompleto.call(persona33));
// ACLARACION: para que esto funcione el metodo al que llamamos desde persona33
// deben compartir las mismas propiedades. De otra forma el this.nombre de persona33
// seria undefined


//pasando argumentos a travez del call
let persona22 = {
    nombre: 'Roberto',
    apellido: 'Gomez',
    nombreCompleto: function(titulo,tel){
        return titulo + ": " + this.nombre + " " + this.apellido + ", " + tel;
    }
}

let persona23 = {
    nombre: "Esteban",
    apellido: "Quito"
}

console.log(persona22.nombreCompleto("Arquitecto", "6546546"));
console.log(persona22.nombreCompleto.call(persona23, "ingeniero", "6566545" ))


//metodo apply
//podemos pasar los argumentos en un arreglo a diferencia del call


let persona11 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){
        return titulo + ": " + this.nombre + " " + this.apellido + ", " + tel;
    }
}

let persona331 = {
    nombre: "Juancho",
    apellido: "Pereira"
}

console.log(persona11.nombreCompleto("Ing", "56465"));

let arr = ["Ing", "46546543"]
console.log(persona11.nombreCompleto.apply(persona331,arr));