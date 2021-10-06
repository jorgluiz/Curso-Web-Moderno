// Retorno implícito, função (arrow)

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))

//const status = nota >= 7 ? 'aprovado' :' reprovado'

console.log('-----------------------------------------------')

//função com corpo ******
const resultado1 = nota1 => {
   
  return nota1  >= 7 ? 'aprovado' : 'reprovado'
} 

  console.log(resultado1(6.1))
  console.log(resultado1(6.7))
