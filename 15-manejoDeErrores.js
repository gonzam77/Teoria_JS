"use strict"

//con try encapsulamos el error y lo mandamos a la variable de
//catch, posteriormente imprimimos el error por consola

//clausula throw

try {
    //x = 10;
    //funcionX();
    throw 'Mi error'
}
catch(err){
    console.log(err);
}

finally {
    console.log("Termina la revision de errores")
}

console.log("continuar...");


let resultado = NaN;


try {
   if(isNaN(resultado)) throw "No es un número";
   else if(resultado === "") throw "Es una cadena vacia"; 
   else if(resultado >= 0) throw "Es positivo";
   else if(resultado < 0) throw "Es negativo";
}

catch(err) {
    console.log(err);
    console.log(err.name);
    console.log(err.message);    
}
finally {
    console.log("Finalizado el control de errores")
}