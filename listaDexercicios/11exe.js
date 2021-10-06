// function receberPrimeiroEUltimoElemento(num = [1, 2, 3, 4, 5, 6, 7]){
//     num.map().unshift().push()
// }

// console.log(receberPrimeiroEUltimoElemento())



// // Resolução 1

// function receberPrimeiroEUltimoElemento(elementos) {
// const indiceDoPrimeiroElemento = 0
// const indiceDoUltimoElemento = elementos.length - 1
// const primeiroElemento = elementos[indiceDoPrimeiroElemento]
// const ultimoElemento = elementos[indiceDoUltimoElemento]
// return [primeiroElemento, ultimoElemento]
// }

// console.log(receberPrimeiroEUltimoElemento([7,14,"olá"]))



// Resolução 2

// function receberPrimeiroEUltimoElemento(elementos) {
// const primeiroElemento= elementos.shift()
// const ultimoElemento = elementos.pop()
// return [primeiroElemento, ultimoElemento]
// }

// console.log(receberPrimeiroEUltimoElemento([7,14,"olá"]))




// Resolução 3
// Resoluções - Exercícios - Curso Fundamentos de Programação 6

function receberPrimeiroEUltimoElemento([primeiroElemento, ...elementosRestantes]) {
const ultimoElemento = elementosRestantes.pop()
return [primeiroElemento, ultimoElemento]
}


console.log(receberPrimeiroEUltimoElemento([7, 14, 8, "olá"]))