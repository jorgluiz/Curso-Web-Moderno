function trocaValores(vetorA, vetorB){
    if (vetorA.length == vetorB.length){
        for(let i =0; i < vetorA.length; i++){

            vetorA[i] = vetorA[i] + vetorB[i]
    
            console.log(vetorA, 'A', i)

            vetorB[i] = vetorA[i] - vetorB[i]
            
            console.log(vetorB, 'B', i)

            vetorA[i] = vetorA[i] - vetorB[i]



            console.log(vetorA, 'A', i)
        }
    }else{
        return 'Vetores de tamanhos diferentes.'
    }
    // console.log('Novo vetor A: ' + vetorA)
    // console.log('Novo vetor B: ' + vetorB)
}

let vetorA = [1, 2, 3]
let vetorB = [4, 5, 6]

trocaValores(vetorA, vetorB)