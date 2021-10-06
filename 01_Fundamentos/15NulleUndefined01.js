const a = {nome: 'Teste'}

console.log(a)

const b = a

b.nome = 'opa'

//b = null
console.log(b)

//não pode atribuir um valor para variavel ( a ) porque é uma >>> constante
a = 3
console.log(a)  //err

let c = 3

let d = c

d++ 

console.log(d)

console.log(c)