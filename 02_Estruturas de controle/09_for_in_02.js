const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

//for   in percorre os índices do array. Os índices de cada um dos elementos
for  (let i in notas){
    console.log('índice', i, notas[i])
}

console.log('--------------------------------------------------')

const pessoa = {
    nome: 'Ana',       //atributo
    sobreNome: 'Silva',//atributo
    idade: 29,         //atributo
    peso: 64           //atributo
}

//for in vai percorrer todos os atributos do object
for(atributo in pessoa) {
   console.log(`${atributo} = ${pessoa[atributo]}`) 
}

console.log(atributo) // atributo fora do escopo, isso corre porque o |atributo| não está definido como |let|

console.log('------------------------//Mais correto de se usar\\---------------------------')

for(let atributo in pessoa) {                          
    console.log(`${atributo} = ${pessoa[atributo]}`)  //atributo dentro do escopo
 }