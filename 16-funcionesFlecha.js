//las funciones flechas no llevan nombre, se denominan anonimas
//las funciones normales pueden ser llamadas antes de ser declaradas
function miFuncion() {
    console.log("Saludos desde mi funcion");
}

miFuncion();

let _miFuncion = function() {
    console.log("saludos");
}
_miFuncion();

//las funciones flechas deben ser declaradas antes de ser llamadas
//al asignarle un let o  const
let miFuncionFlecha = (args) => {
    console.log("SALUDOS DESDE LA FUNCION FLECHA");
}
miFuncionFlecha();

// simplificando las funciones flecha
//si el contenido del cuerpo de la funcion es una sola linea podemo
//omitir abrir llaves y escribir la linea despues de la flecha
const funcionFlecha = () => console.log("funcion flecha simple");
funcionFlecha();

//devolver valor en funcion flecha
const flechaReturn = () => "saludo desde funcion flecha con return"
console.log(flechaReturn());

//devolver un objeto funcion flecha
// para no confundir las llaves del objetos con la llaves del cuerpo de la funcion
//debemos agregar parentesis
const funcioFlechaObjeto = () => ({nombre:"juan", apellido:"Ramirez"}) 
console.log(funcioFlechaObjeto());

//funcion flecha con parametros
//si solo pasamos un argumento ppodemos omitir los parentesis
const flechaConParametros = arg => console.log(arg);
flechaConParametros("soy un argumento en una funcion flecha");
const flechaConDosParametros = (arg1, arg2) => arg1 + arg2;
console.log(flechaConDosParametros(2,5));
