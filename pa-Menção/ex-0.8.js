//Crie uma matriz de objetos contendo nome e idade. Crie uma função que retorne apenas para pessoas com mais de 18 anos.
const cadastro = [
    {nome: 'Nicole', idade: 15},
    {nome: 'Thifany', idade: 17},
    {nome: 'Gabriel', idade: 27},
    {nome: 'Heitor', idade: 22}
]

function filtrarIdade (maiorDeIdade = []) {
    let adultos = []
    for (let i = 0; i < cadastro.length; i++) {
        if (cadastro[i].idade > 18) {
            adultos.push(cadastro[i])
        }
    }
    return adultos
}
console.log(filtrarIdade(cadastro))