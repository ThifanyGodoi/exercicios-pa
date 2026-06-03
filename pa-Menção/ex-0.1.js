const cadastroAluno = 
    {nome:'Thifany', 
    idade: 17,
    curso: 'Desenvolvimento de Sistemas'};
    
function apresentacaoDoAluno (cadastroAluno){
    return `Olá, meu nome é ${cadastroAluno.nome}, tenho ${cadastroAluno.idade} anos e estou cursando ${cadastroAluno.curso}`
}
const fraseDoAluno = apresentacaoDoAluno (cadastroAluno) 
console.log(fraseDoAluno)
