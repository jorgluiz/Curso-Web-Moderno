function paresImpares(vetorNumeros){
    let qtdPares = 0
    let qtdImpares = 0
    for (let i = 0; i < vetorNumeros.length; i++){
        // console.log(vetorNumeros[i])
        if (vetorNumeros[i] % 2 == 0){
            qtdPares++
        }else {
            qtdImpares++
        }
    }
    
    console.log(`${qtdPares} números pares é ${qtdImpares} Números ímapres.`)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14]
paresImpares(vetor)