function observarIntetvalo (vetor) {
    qtdNumerosIntervalos = 0
    qtdForaDoIntervalo = 0
    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] >= 10 && vetor[i] <= 20){
            qtdNumerosIntervalos++
        }else{
            qtdForaDoIntervalo++
        }
    }
    return `${qtdNumerosIntervalos} números dentro do intervalo / ${qtdForaDoIntervalo} números fora do intervalo`
}

vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21, 22]

console.log(observarIntetvalo(vetor))