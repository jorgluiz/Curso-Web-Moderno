// Armazenando uma função em uma variavel

//função anônima 
const imprimirSoma = function (a, b){
    
     console.log(a + b)

}

imprimirSoma(2, 3)

//------------------------------------------------------------------
// Armazenando uma função arrow em uma variavel
//função (arrow => ) substitui (function) e fica como mostra abaixo
const soma = (a, b) => {

    return a + b

}

console.log(soma(2, 3))

//------------------------------------------------------------------

//função arrow. Bem mais enxuta "limpa"
// Retorno implícito
//parâmetros (a, b) e retorno da função a - b
const subtracao = (a, b) => a - b //null
console.log(subtracao(2, 3))

//-------------------------------------------------------------------

//função arrow. Bem mais enxuta "limpa"
const imprimir2 = a => console.log(a)
imprimir2('legal!!!')
