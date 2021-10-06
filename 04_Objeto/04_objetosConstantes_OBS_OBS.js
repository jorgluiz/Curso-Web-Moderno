// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'prdro'
console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'}

// freeze é um método de Object (= congela o Object). valores se tornando fixos
Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)

// const pessoaConstante = Object.freeze({nome: 'Joao'})
// pessoaConstante.nome = 'Maria'
// console.log(pessoaConstante)