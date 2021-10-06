function despesasTotais(itens) {
    var total = 0
    for (let item of itens)
        total += item.preco
    return total
}


let totalItens = despesasTotais([
    { nome: "Jornal online", categoria: "Informação", preco: 89.99 },
    { nome: "Cinema", categoria: "Entretenimento", preco: 150 }
]) // retornará 239.99

console.log(totalItens)







// Resolução 2


function despesasTotais(itens) {
    return itens
        .map(item => item.preco)
        .reduce((acumulador, valorAtual) => acumulador + valorAtual)
}


let totalItens = despesasTotais([
    { nome: "Jornal online", categoria: "Informação", preco: 89.99 },
    { nome: "Cinema", categoria: "Entretenimento", preco: 150 }
]) // retornará 239.99

console.log(totalItens)







// Resolução 3


function despesasTotais(itens) {
return itens.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco, 0)
}

despesasTotais([
    { nome: "Jornal online", categoria: "Informação", preco: 89.99 },
    { nome: "Cinema", categoria: "Entretenimento", preco: 150 }
]) // retornará 239.99