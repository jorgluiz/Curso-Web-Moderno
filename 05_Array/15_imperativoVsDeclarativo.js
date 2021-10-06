const alunos = [
    { nome: 'Joao', nota:  7.9},
    { nome: 'Maria', nota: 9.2}
]

// Imperativa ### Como deve ser feito
let total1 = 0
for(let i  = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

//---------------------------------------------------------------

// Declarativo ### o que deve ser feito

//métodos que pode ser reusado em outras soluções***
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

// sql -> selct código, nome, email from clientes where ativo = 1