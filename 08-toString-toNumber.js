let miNumero = "10";

console.log(miNumero);
console.log(typeof miNumero);


miNumero = Number(miNumero);

console.log(miNumero);
console.log(typeof miNumero);

miNumero = miNumero.toString();

console.log(miNumero);
console.log(typeof miNumero);

let miNumero2 = "18x";
console.log(miNumero2);
console.log(typeof miNumero2);

miNumero2 = Number(miNumero2);

console.log(miNumero2);
console.log(typeof miNumero2);

if (isNaN(miNumero2)) {
    console.log("No es un número")
} else {
    console.log("es un número")
}


