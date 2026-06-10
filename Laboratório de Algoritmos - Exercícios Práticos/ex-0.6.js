function gerarRelatorio(nomeAluno, status = "Pendente") {
    console.log(`Relatório do aluno ${nomeAluno} está ${status}`);
}
gerarRelatorio("Maria", "Aprovada");