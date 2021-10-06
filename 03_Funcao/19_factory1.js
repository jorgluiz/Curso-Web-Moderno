const prod1 = {
    nome: 'Roupa',
    preco: 45
}

// Factory simples
function criaPessoa(){     // O que é função factory? Função que retorna um objeto
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(prod1, '\n')
console.log(criaPessoa())


