// Criar um algoritmo que leia quatro notas de cinco alunso e calcule e mostre as medias e notas dos alunos
const input = require('readline-sync');

let notasSala = []; // Nossa matriz (lista de listas)
let medias = [];    // Array para guardar a média de cada aluno
const totalAlunos = 5;
const totalNotas = 4;

// Loop para percorrer cada ALUNO
for (let i = 0; i < totalAlunos; i++) {
    notasSala[i] = []; // guardar na memoria a "linha" do aluno atual como um array vazio
    let somaTemporaria = 0;

    console.log(`\n--- Notas do Aluno ${i + 1} ---`);

    // Loop para percorrer cada NOTA do aluno atual
    for (let j = 0; j < totalNotas; j++) {
        let nota = Number(input.question(`Digite a ${j + 1}a nota: `));
        
        notasSala[i][j] = nota; // Guarda a nota na posição exata [aluno][nota]
        somaTemporaria += nota;
    }

    medias[i] = somaTemporaria / totalNotas; // Guarda a média no array de médias
}

// Exibição dos dados usando apenas índices
console.log("\n--------------------- RELATORIO -------------------------");
for (let i = 0; i < totalAlunos; i++) {
    console.log(`ALUNO ${i + 1} | NOTAS: ${notasSala[i]} | MÉDIA: ${medias[i]}`);
}
console.log("---------------------------------------------------------");