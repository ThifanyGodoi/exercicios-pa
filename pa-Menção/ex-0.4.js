let input = require("readline-sync")
let nomes = ['Nicole', 'Thifany', 'Gabriel', 'Guilherme']

function verificarNomes (listaNomes) {
    let nomeDigitado = input.question("Digite o nome: ")
    for (let i = 0; i < nomes.length; i++) {
        if (nomeDigitado === nomes[i]){
            return 'Nome encontrado!'
        }
        else{
            return 'Nome não encontrado!'
        }
    }

}
console.log(verificarNomes());