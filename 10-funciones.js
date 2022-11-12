// se puede llamar a la funcion incluso antes de haberla declarado
miFuncion(4,2);
//declaracion de la funcion
function miFuncion(a, b) {
    console.log("suma: " + (a + b));
}
let a = 2; b = 3;
//llamamos a la funcion
miFuncion(a,b);

//return: devuleve un valor
function devolverValor(a,b) {
    return a + b;
}
console.log(devolverValor(4,3));

// tambien se puede agregar el resultado a una variable
let resultado = devolverValor(4,5);
console.log(resultado);

// funcion de tipo expresion
let saludo = function(){return "hola"};
console.log(saludo());
let sumar = function(a,b){return a + b};
console.log(sumar(2,4));

//funciones flecha
//usamos const porque es mas recomendable para este tipo de funciones
//omitimos la keyword function / return
//las funciones flecha siempre devuelven un valor
const funcionFlecha =  (a,b) => a + b;
resultado = funcionFlecha(3,5);
console.log(resultado);


//funcion de self invoking // solo puede ser llamada una sola vez
//ya que no se le asigna a ninguna variable ni tiene nombre

(function (a,b) {
    console.log("Ejecutando la funcion: " + (a+b));
})(3,4);

//funciones como objeto
console.log(typeof miFuncion);

//saber cuantos argumentos recibe la funcion
//los argumentos de una funcion se comportan como un array
//si no pasamos en este caso el 3er arg podemos definirlo en la funcion
//pero no formará parte del array de argumentos
//pero si mandaramos un argumento al parametro 'c' se sobreescribiría
function multiplicacion(a,b,c = 2) {
    console.log(arguments.length)
    console.log(arguments[0])
    console.log(arguments[1])
    console.log(arguments[3])
    return a * b + c;
}
let result =multiplicacion(7,4);
console.log(result);
// si le pasamos mas argumentos de los paramatros que recibe podemos
//acceder a ellos mediante la propiedad arguments
function resta(a,b) {
    return a - b - arguments[2];
}
console.log(resta(10,3,2));

//SUMA DE TODOS LOS ARGUMENTOS
let res = sumarTodo(5, 4, 13, 10, 9);
function sumarTodo(){
    let suma = 0;
    for (let i = 0; i < arguments.length; i ++) {
        suma += arguments[i];
    }
    return suma;
}
console.log(res);

// metodo funcion como texto
//solo sirve para saber que puede ser tratada como objetos
let funcionComoTexto = miFuncion.toString(); 
console.log(funcionComoTexto);

//paso por VALOR
//cuando el valor que tiene la variable es un tipo de dato primitivo
//en este caso un entero (int) el paso a la funcion es por valor y no permite modificaciones
//ya que no tiene ni atributos ni metodos
let x = 10;
function cambiarValor(a) {
    a = 20;
}
cambiarValor(x);
console.log(x); 
//'x' solo pasa su valor a la funcion

//paso por REFERENCIA
// este tipo de paso permite el cambio de las propiedades del objeto
const persona = {
    nombre:"Juan", 
    apellido: "Perez"
}
console.log(persona);
function cambiarValorObjeto(p1) {
    p1.nombre = "Carlos";
    p1.apellido = "Garcia";
}
cambiarValorObjeto(persona);
console.log(persona);

