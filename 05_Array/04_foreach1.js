const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

/*
O método .forEach() Chama uma função para cada elemento do array.
         .forEach(function(valor, índice, array)                            */

//ex: 1        
aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

console.log('\n*******************************************************************')



//ex: 2
aprovados.forEach(nome => console.log(nome))


console.log('\n*******************************************************************')

//ex: 3
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)