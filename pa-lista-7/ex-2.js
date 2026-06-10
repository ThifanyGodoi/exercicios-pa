const readline = require('readline-sync');
const numeros = [];
let i = 0;
console.log("====== DIGITE OS NÚMEROS =======");

for (let i = 0; i < 5; i++) {

    numeros[i] = Number(
        readline.question(`Digite o ${i + 1} numero: `)
    );
}
console.log("==============================");

for (let x = 0; x < numeros.length; x++) {
    for (let y = 0; y < numeros.length - 1; y++) {
        if (numeros[y] > numeros[y + 1]) {
            let aux = numeros[y];
            numeros[y] = numeros[y + 1];
            numeros[y + 1] = aux;

        }
    }
}

console.log("=========Ordem crescente:==========");

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
console.log("===================================")