const pilotos = ['Vettel', 'Alonso', 'Raikonen', 'Massa']

pilotos.pop() // pop() removo o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')// adicionando um elemento
console.log(pilotos)


pilotos.shift()// shifit() remove o primeiro elemento da lista
console.log(pilotos)


pilotos.unshift('Hamilton')// unshift() adiciona no primeiro elemento da lista
console.log(pilotos) 



// adicionar
pilotos.splice(2, 0, 'Botas', 'Massa')//splice pode adicionar e remover elementos 
console.log(pilotos)    

pilotos.splice(3, 1)// remover
console.log(pilotos)

console.log('***********************************************************')


const algunsPilotos1 = pilotos.slice(1) // método .slice(), retorna um novo array gerado (pega uma parte do array)
console.log(algunsPilotos1, 'novo array aqui***')


const algunsPilotos2 = pilotos.slice(1, 4)// vai até um índice 4 mas não vai incluí o indice 4 / 'Verstappen'
console.log(algunsPilotos2, 'novo array***') 