// function strin(num){

//     let corda = ""
//     let quantidade = []

//     for(let i = 0; i < num; i++){

//       quantidade += corda = "+"

//     }

//     return quantidade
// }

// console.log(strin(5))






// Resolução 1

// function simboloMais(quantidade) {
// let resultado = ''
// for(let i = 0; i < quantidade; i++)
// resultado += '+'
// return resultado
// }


// Resolução 2


// function simboloMais(quantidade) {

// return Array(quantidade).fill('+').join('')

// }



// Resolução 3


function simboloMais(quantidade) {
return "+".repeat(quantidade)
}


console.log(simboloMais(3))