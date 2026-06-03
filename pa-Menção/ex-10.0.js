//Crie um array de objetos representando jogadores com nome e pontos. Crie uma função que retorne o array ordenado do maior para o menor ponto.
const jogadores = [
    {nome: 'Nicole', pontos: 10},
    {nome: 'Thifany', pontos: 990},
    {nome: 'Gabriel', pontos: 330},
    {nome: 'Heitor', pontos: 0}
]

function ordenarJogadores(jogadoresOrdenados = []) {
    for (let i = 0; i < jogadores.length; i++) {
        for (let j = 0; j < jogadores.length - 1; j++) {
            if (jogadores[j].pontos < jogadores[j + 1].pontos) {
                let jogadorTemp = jogadores[j]
                jogadores[j] = jogadores[j + 1]
                jogadores[j + 1] = jogadorTemp
            }
        }     
    }
    return jogadores
}
console.log(ordenarJogadores(jogadores))