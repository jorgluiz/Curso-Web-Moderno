const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

// console.log(alunos.map(a => a.nota)) // array da nota dos alunos


const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) { //somando as nota de todos os alunos

    console.log(acumulador, atual) //mostrando passo a passo
    return acumulador + atual

})

console.log(resultado) //resultado da soma de todas as notas