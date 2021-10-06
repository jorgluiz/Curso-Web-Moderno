function cardapio(codigoProduto, qtd) {
    switch (codigoProduto) {
        case 100:
            let preco = 3.00
            let total = qtd * preco
            return console.log(`código do produto = ${codigo} / Cachorro quente / total = $${total.toFixed(2)}`)
    }
}

cardapio(100, 2)
