/*Crie um objeto representando uma conta com agência, número da conta, senha, saldo e histórico de operações. Crie um sistema com as funções:

const contaBancaria = {
  agencia: "1234",
  numeroConta: "55667-8",
  senha: "999",
  saldo: 1550.00,
  historico: []
};

function validarAcesso(agencia, conta, senha) {
  return contaBancaria.agencia === agencia && 
         contaBancaria.numeroConta === conta && 
         contaBancaria.senha === senha;
}

function exibirSaldo() {
  console.log(Saldo atual: R$ ${contaBancaria.saldo.toFixed(2)});
}

function realizarSaque(valorSaque) {
  if (valorSaque > contaBancaria.saldo) {
    console.log("Erro: Saldo insuficiente.");
    return;
  }
  if (valorSaque % 10 !== 0) {
    console.log("Erro: Valor deve ser múltiplo de R$ 10.");
    return;
  }
  contaBancaria.saldo -= valorSaque;
  contaBancaria.historico.push(Saque: -R$ ${valorSaque});

  console.log(\n--- Saque de R$ ${valorSaque} realizado ---);
  const notas = [100, 50, 20, 10];
  let restante = valorSaque;

  for (let i = 0; i < notas.length; i++) {
    let notaAtual = notas[i];
    let quantidadeNotas = Math.floor(restante / notaAtual); 
    
    if (quantidadeNotas > 0) {
      console.log(${quantidadeNotas} nota(s) de R$ ${notaAtual});
    }
    restante = restante % notaAtual; 
  }
}
