// function estaEntre(minimo, maximo, numero, inclusivo = false) {

//     if(inclusivo) return numero >= minimo && numero <= maximo
//     return numero > minimo && numero < maximo
//     }

//     estaEntre(10, 100, 50) // retornará true
//     estaEntre(16, 100, 160) // retornará false

//     console.log( estaEntre(3, 150, 3, true))



    // Resolução 2

function estaEntre(minimo, maximo, numero, inclusivo = false) {

return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
}

console.log(estaEntre(10, 100, 50, true))
console.log(estaEntre(10, 100, 160))