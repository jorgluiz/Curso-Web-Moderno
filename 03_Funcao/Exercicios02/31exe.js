function numeroNegativos(vetor){
    let qtdNegativos = 0
    for(let i = 0; i < vetor.length; i++){
        if (vetor[i] < 0){
            qtdNegativos++

            console.log(qtdNegativos)
        }
    }
    return qtdNegativos
}

vetor =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]
console.log('\n', numeroNegativos(vetor))