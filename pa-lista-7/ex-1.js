//Elaborar um algoritmo para o exemplo 09 que utilize apenas uma estrutura de repetição
const readline = require('readline-sync');
let media = 0;
let notas = [];

for (i = 0; i < 4; i++) {
    notas[i] = readline.question(`Digite a nota ${i + 1}: `);
    media = Number(media) + Number(notas[i]);
}
console.log(`---------AVALIAÇÃO DE NOTAS---------
    Notas: ${notas}
    Média: ${media / 4}
    ------------------------------------`
);