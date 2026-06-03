//Crie um array contendo objetos de produtos com nome e preço. Crie uma função que receba o array e retorne apenas os produtos com preço acima de 50.
const listaDeProdutos = [
    {nome: "Notebook", preco: 500},
    {nome: "Smartphone", preco: 150},
    {nome: "Tablet", preco: 100},
    {nome: "Monitor", preco: 80},
    {nome: "Teclado", preco: 20}
];
function filtrarProdutosPorPreco(produtos = []) {
    let produtosFiltrados = []; 
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].preco > 50) {
            produtosFiltrados.push(produtos[i]);
        }
    }
    return produtosFiltrados;
}
console.log(filtrarProdutosPorPreco(listaDeProdutos));