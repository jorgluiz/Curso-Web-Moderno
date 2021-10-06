const carrinho = [                            // array no formato JSON
    '{ "nome": "borracha", "preco": 3.45}',
    '{ "nome": "caderno", "preco": 13.90}',
    '{ "nome": "kit de lapis", "preco": 41.22}',
    '{ "nome": "caneta", "preco": 7.50}'
]

//Retornar um array apenas com os preços


const paraObjeto = json => JSON.parse(json)  //converte JSON p/Objeto
const apenasPreco = produto => produto.preco //setando os preços de produto

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)
