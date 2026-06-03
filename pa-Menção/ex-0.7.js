//Crie um array com objetos de itens (nome, quantidade, preço). Crie uma função que calcula o valor total do carrinho.

const carrinho = [
    {nome: 'Arroz', quantidade: 2, preco: 20},
    {nome: 'Fejao', quantidade: 4, preco: 15},
    {nome: 'Macarrao', quantidade: 3, preco: 10},
    {nome: 'Carne', quantidade: 1, preco: 50},
    {nome: 'Frango', quantidade: 2, preco: 30},
]

function calcularValorTotal (arrayCarrinho = []) {
    let valorTotal = 0
    for (let i = 0; i < arrayCarrinho.length; i++) {
        let item = arrayCarrinho[i]
        valorTotal += item.quantidade * item.preco
    }
    return valorTotal

}
console.log(calcularValorTotal(carrinho));