//Crie uma função filtrarAprovadosque recebe o array listaDeProvas(criado no ex. 8). Use um laço ( forou while) para percorrer o array e imprimir no console apenas as disciplinas em que notaTiradafoi maior ou igual a 6.0.
let listaDeProvas = [
    {disciplina: 'Matemática', notaTirada: 5},
    {disciplina: 'Português', notaTirada: 7},
    {disciplina: 'História', notaTirada: 9}
];
function filtrarAprovados(listaDeProvas) {
    for (let i = 0; i < listaDeProvas.length; i++) {
        if (listaDeProvas[i].notaTirada >= 6.0) {
            console.log(`Disciplina: ${listaDeProvas[i].disciplina}, Nota: ${listaDeProvas[i].notaTirada}`);
        }
    }
}
filtrarAprovados(listaDeProvas);