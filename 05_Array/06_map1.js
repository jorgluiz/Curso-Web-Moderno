/*O método map() invoca a função callback passada por argumento 
para cada elemento do Array devolve um novo Array como resultado.
-mapea objeto p/número
-mapea objeto p/string
-mapea um array de JSON p/ array de objeto

***   Resumindo:   .map server para mapear um array. OBS: o array original não é alterado   ***
                                                                                                                                                          */

const { conformsTo } = require("lodash")

const nums = [1, 2, 3, 4, 5]

let  resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado) //array mapeado com novos elementos


console.log('*********************************************************************************************')

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado)


/*Descrição
O método   .Map   chama a função callback recebida por parâmetro para cada elemento do Array original,
mapea um novo array com base nos retornos de cada chamada. 
A função callback é
chamada apenas para os elementos do array.

A função callback é chamada com três argumentos: "Valor" (= elemento), "índice"  e o "array atual".
*/


