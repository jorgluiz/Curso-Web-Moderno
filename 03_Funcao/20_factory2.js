function criaProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1

    }

}

console.log(criaProduto('Not',  2000))
console.log(criaProduto('iPad', 1900))