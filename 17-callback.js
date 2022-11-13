//callback es una funcion pasada por parametros e invocada dentro de la 
//funcion que la recibe

function miFuncion1() {
    console.log("funcion1");
}

function miFuncion2() {
    console.log("funcion2");
}

miFuncion1();
miFuncion2();

function funcionCB(CB) {
    CB();
}

funcionCB(miFuncion1);
funcionCB(miFuncion2);

//llamadas asincronas con uso de setTimeout
//setTimeout(cb, seg);
//esta funcion no se ejecuta linea a linea sino que se ejecuta una vez transcurrido el tiempo que seteamos
//de esta manera pueden haber varios procesos activos al mismo tiempo sin importar en que parte del programa 
//se encuentre

function miFuncionCallback () {
    console.log("3 seg");
}

setTimeout(miFuncionCallback, 3000);
//declarando la funcion en el argumento
setTimeout(function(){console.log("10 seg")},10000);
//pasando como arg una funcion flecha
setTimeout(()=>console.log("5 seg"),5000);

//setInterval
let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`)
}
//setInterval(reloj,1000);
