// implementação do .map

Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome": "borracha", "preco": 3.45}',
    '{ "nome": "caderno", "preco": 13.90}',
    '{ "nome": "kit de lapis", "preco": 41.22}',
    '{ "nome": "caneta", "preco": 7.50}'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)

//OBS: O ***map*** GERA UM NOVO ARRAY E NÃO ALTERA O ARRAY ATUAL