// //Ex1:
// let p = new Promise(function(cumprirPromessa) {
//      cumprirPromessa( {
//        x: 3,
//        y: 4
//      })
// })


// p.then(function(valor){
//   console.log(valor.x)
// })


// //Ex2:----------------------------------------------
// let p = new Promise(function(cumprirPromessa) {
//   cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
// })


// p.then(function(valor){
//     console.log(valor)
// })

//Ex3:-----------------------------------------------
let p = new Promise(function(cumprirPromessa) {
  cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})


p

   .then(valor => valor[3])
   .then(pLetra => pLetra[0])
   .then(console.log)
   .then()



let p = new Promise(function (cumprirPromessa) {
  cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

function primeiroElemento(array) {
  return array[0]
}

function primeiraLetra(string) {
  return string[0]
}



const letraMinuscula = letra => letra.toLowerCase()


p

  .then(primeiroElemento)
  .then(primeiraLetra)
  .then(letraMinuscula)
  .then(console.log)
