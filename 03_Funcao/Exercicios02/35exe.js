const { remove } = require("lodash")

vetorPilha = [1, 2, 3, 4, 5]
vetorAdiciona = [6, 7, 8, 9, 10]
vetorString = ['ADD']

function adicionarVetor(vetorInicial, vetorAdicionar) {
    for (let i = 0; i < vetorAdicionar.length; i++) {
        console.log(vetorAdicionar[i])
        vetorInicial.push(vetorAdiciona[i])
        vetorInicial.push(vetorString[i])
            

    }
    console.log('Vetor adicionado: ' + vetorAdiciona)
    console.log('Vetor resultado: ' + vetorInicial)
}

adicionarVetor(vetorPilha, vetorAdiciona)