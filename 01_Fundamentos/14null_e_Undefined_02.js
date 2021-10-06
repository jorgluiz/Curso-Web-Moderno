let valor // não inicializada 

console.log(valor)

valor = null //ausência de valor
console.log(valor)
//console.log(valor.toString()) // Erro!

const produto = {} 
console.log(produto.preco) // o preço não está definido (undefined)
console.log(produto)

produto.preco = 3.50

console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
//tirar um atributo de um objeto usar (delete)
//delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)