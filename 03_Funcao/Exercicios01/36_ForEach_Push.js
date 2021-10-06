//O método forEach() executa uma dada função em cada elemento de um array.

let vetor = [1, 2, 3, 4, 5]

function multiplicaVetor(vetor, multiplicador){
    let vetorResultado = []
    vetor.forEach(elemento => {
        vetorResultado.push(elemento * multiplicador) 
    });

    return vetorResultado
}

console.log(multiplicaVetor(vetor, 3))
