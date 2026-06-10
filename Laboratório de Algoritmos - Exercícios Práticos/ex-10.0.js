/*A Calculadora de Média (O Desafio Final): * Crie um objeto chamado sistemaEscolar.

Dentro dele, coloque uma propriedade nomeDoAluno.
Adicione uma propriedade notas, que será um Array com 4 números.
Crie um método (uma função atrelada ao objeto) chamado calcularMediaGeral. Esse método deve somar todos os valores do array de notas, dividir pelo tamanho do array ( .length) e retornar a média exata.
Execute sistemaEscolar.calcularMediaGeral()e imprima o resultado!*/
const sistemaEscolar = {
  nomeDoAluno: "Guilherme", notas: [8, 9, 7, 10],
  calcularMediaGeral: function() {
    let soma = 0;
    for (let i = 0; i < this.notas.length; i++) {
      soma += this.notas[i];
    }
    
    return soma / this.notas.length;
  }
};

const mediaFinal = sistemaEscolar.calcularMediaGeral();
console.log(A média do aluno ${sistemaEscolar.nomeDoAluno} é: ${mediaFinal});