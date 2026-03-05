let input = require ('readline-sync');
let numero1 = input.questionInt("Digite o primeiro numero:");
let resultado1 = (numero1 - 3)
let numero2 = input.questionInt("Digite o segundo numero:");
let resultado2 = (numero2 +2)
let resultado3 = (resultado1 + resultado2) - 1 
console.log ("resultado = " + resultado3)
