// Resolução 1

function menorNumero(numeros) {
    let menor = numeros[0]
    for (let i in numeros)
        if (numeros[i] < menor)
            menor = numeros[i]
    return menor
}

console.log(menorNumero([10, 5, 35, 65])) // retornará 5
menorNumero([5, -15, 50, 3]) // retornará -15



// Resolução 2

function menorNumero(numeros) {
return numeros.reduce((anterior, atual) => anterior < atual ? anterior : atual)
}



// Resolução 3



function menorNumero(numeros) {
return Math.min(...numeros);
}