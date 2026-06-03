let notas = [7, 9.5, 1, 8.5, 6]

function calcularMedia (arrayNotas) 
{let somaTotal = 0
    
    for (let i = 0; i < arrayNotas.length; i++){
   
        somaTotal = arrayNotas[i] + somaTotal
    }

    let media = somaTotal/ arrayNotas.length
    console.log(media);
    return media
}
 calcularMedia(notas)