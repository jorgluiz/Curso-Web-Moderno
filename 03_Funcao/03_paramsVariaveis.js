
// ( arguments ), é um array interno de uma função, que tem todos argumentos que foram passados.

function soma() {
    let soma = 0 

    for(i in arguments){
        //somando os arguments 
        soma += arguments[i]
    }

    return soma
}

console.log(soma(1.1, 2.2, 3.3))
console.log(soma())
console.log(soma(1))
//não recomendado 
console.log(soma(1.1, 2.2, 3.3, " Teste"))
console.log(soma(' a', 'b', 'c')) 