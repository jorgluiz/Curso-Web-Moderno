console.log(typeof Array, typeof new Array, typeof [])

console.log('\n')

let aprovados = new Array('Bia', 'Carlos', 'Ana') //forma nao recomendada para criar array
console.log(aprovados)

console.log('\n')

aprovados = ['Bia', 'Carlos', 'Luan']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])//undefined (não existe no array)


aprovados[3] = 'Paulo'  //adicionando ou ***substituir*** um elemento 
console.log(aprovados[3])

aprovados.push('Abia')   // Adicionando um elemento no final*** push ***
console.log(aprovados.length) //tamanho do array

aprovados[9] = 'Júnior'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log('\n********************************************************************')
console.log(aprovados)
console.log('********************************************************************')
aprovados.sort() // ordenando o array a z
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1], '= índice[1]')
console.log('********************************************************************')
aprovados.sort() // ordenando o array a z
console.log(aprovados)

console.log('\n  reatribuir o novo array aprovados')

aprovados = ['Bia', 'Carlos', 'Ana']
//       método .splice(1, 2)   a partir do elemento 1 vai ser deletado 2 elementos
aprovados.splice(1, 1, 'Elemento1', 'Elemento2')// adicionando elemento 'Elemento1' e 'Elemento2'
console.log(aprovados)