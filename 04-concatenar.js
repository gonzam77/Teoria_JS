//concatenacion

var nombre = "Juan";
var apellido = "Perez";

var nombreCompleto = nombre + " " + apellido;

console.log(nombreCompleto);

var nombreCompleto2 = "Carlos" + " " + "Lopez";
console.log(nombreCompleto2);


// el numerop es pasado a string
var x = nombre + 219;
console.log(x);

// convierte los numeros a string
var x = nombre + 2 + 4;
console.log(x);

// mantiene los numero como numeros al sumar, luego a string
var j = nombre + (2 + 4);
console.log(j);

// evalua primero los numero ya que va de izquierda a derecha
// por ende encuentra dos numeros los suma y luego continua
// por el contrario si primero encuentra un string todo lo que viene despues es un string

x = 2 + 4 + nombre;
console.log(x);






