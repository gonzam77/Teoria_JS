// ya no se recomienda este tipo de declaracion de arreglos
let autos = new Array("BMW", "Mercedes Benz", "Audi"); 
console.log(autos);

//const hace referencia al lugar de memoria en donde se va a almacenar el arreglo
// pero aun se pueden agregar/eliminar elementos al él y/o modificarlos. 
const autos2 = ["BMW", "Mercedes Benz", "Audi"];
autos2[3] = "VW";
console.log(autos2);

// otra forma de agregar elementos 
//el mismo metodo se puede usar para mostrar los elementos
const autos3 = [];
autos3[0] = "BMW"; autos3[1] = "Mercedes Benz"; autos3[2] = "Audi";
console.log(autos3);
console.log(autos2[2]);

//otra forma de agregar elementos al arreglo
//push agrega al final del arreglo
//unshift agrega al inicio del arreglo
const autos4 = ["Fiat"];
autos4.push("BMW", "Mercedes Benz", "Audi");
console.log(autos4);
autos4.unshift("Volvo")
console.log(autos4)

//para eliminar usamos pop() -- elimina el ultimo
// shift() -- elimina el primer elemento
autos4.shift(); // eliniará 'Volvo'
console.log(autos4);
autos4.pop(); //eliminará 'Audi'
console.log(autos4);

// otra forma de mostar los elementos, en este caso 1 por vez es
//con un bucle for, este los mostrara por separado.
for (i = 0; i < autos4.length; i ++) {
    console.log(autos4[i]);
}

// el forEach es otro tipo de for que tambien se usa para arrgelos u objetos
autos4.forEach(element => {
    console.log(element)
});

//modificar un elemento o cambiar por otro elemento
console.log(autos);
autos[1] = "MercedezBenz"; //quitamos el espacio en el elemento 2
console.log(autos);
autos[1] = "Ford" //cambiamos el elemento 2 por otro elemento distinto
console.log(autos);

//mostrar el largo del arreglo
 console.log(autos2.length);

//como saber que estamos trabajando con un arreglo

console.log(typeof autos);
// este metodo nos dice que es un objeto, no nos sirve

console.log(Array.isArray(autos));
// afirmamos que estamos trabajando con un arreglo

console.log(autos instanceof Array);
//preguntamos si autos es una instancia de Array
