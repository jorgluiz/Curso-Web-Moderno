// function multiplicar(num1, num2){
//       let resultado 
//     for(let i = 0; i < num2; i++){

//         resultado += num1

//      }
//      return resultado
// }
// console.log(multiplicar(3, 3))




//Resolução 1

// function multiplicar(numeroA, numeroB) {
//     let resultado = 0
//     /* a otimização feita para diminuir a quantidade de chamadas recursivas pode ser
//     realizada aqui para diminuir a quantidade de loops */
//     for(let i = 0; i < numeroB; i++)
//     resultado += numeroA
//     return resultado
//     }




    // Resolução 2

// function multiplicar(numero, multiplicador) {
// if (numero === 0 || multiplicador === 0) return 0

// return multiplicador === 1 ? numero : numero + multiplicar(numero, multiplicador-1)
// }






// Resolução 3

function multiplicar(numeroA, numeroB) {

if (numeroA === 0 || numeroB === 0) return 0
const maiorNumero = Math.max(numeroA, numeroB)
const menorNumero = Math.min(numeroA, numeroB)

function multiplicarRecursivamente(numero, multiplicador) {
return (
multiplicador === 1 ?
numero :  numero + multiplicarRecursivamente(numero, multiplicador-1)
)
}
// nessa versão, garantimos que o multiplicador será o menor número, portanto haverá o mínimo de chamadas recursivas
return multiplicarRecursivamente(maiorNumero, menorNumero )
}


console.log(multiplicar(5, 5))
console.log(multiplicar(0, 7))