let vetorInteiro = [2, 4]
let vetorString = ["HelloWord", "JavaScript"]
let vetorDouble = [2.4, 4.5, 3.4]

function concatenar(...args) {
    resultado = []
  for (let i =0; i < arguments.length; i++){
      resultado = resultado.concat(arguments[i])
  }
  return resultado
}

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))