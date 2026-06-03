//Crie uma função que receba um array e retorne um objeto mostrando quantas vezes cada elemento aparece.

let listaDeOcorrencia = [2,2,2,2,2,2,3,3,3,4,5,5,6,7,8,8,3,22,11,2,78,7,7,4,78,89,4,3]
function contadorDeOcorrencia (array = []) {
    let contagem = {}
    for (let i = 0; i < array.length; i++) {
       let elemento = array[i]
       if 
            (contagem[elemento]){
            contagem[elemento] += 1;
        } else{
            contagem[elemento] = 1;
        }
       
    }
    return contagem;
}