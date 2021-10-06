// Recursividade
//  Há outra forma de fazermos esse cálculo aplicando recursividade com funções no JavaScript. Este conceito deixa o código mais abstrato, mas garante uma forma mais simplista e inteligente de se atingir o mesmo resultado.

// O conceito de recursividade no JavaScript se resume basicamente em uma função que chama ela mesma infinitamente até que alguma "estrutura de controle" interrompa esse "loop".


//  Para aplicar a recursividade neste caso, precisamos ter em mente algumas igualdades no cálculo do fatorial:


// 5! = 5 * 4 * 3 * 2 * 1
// 5! = 5 * 4 * 3 * 2!
// 5! = 5 * 4 * 3!
// 5! = 5 * 4!
// 5! = 5!
// 5! = 120

//  Sendo o fatorial uma representação de um conjunto de multiplicações, podemos efetuar multiplicações de fatoriais também como parte do cálculo de um fatorial de ordem maior. Neste exemplo acima, podemos ver que é possível na matemática multiplicarmos o fatorial de 3 (3!) com 4 e 5 para chegarmos ao resultado do fatorial de 5 (5!).


//  Indo mais adiante, recaptulando a fórmula básica do fatorial, temos:

// ?
// 1
// n! = n * (n - 1) * (n - 2)...
//  ... e convertendo essa lógica de cálculo para uma função recursiva na linguagem de programação, temos:



// function calcularFatorialRecursivamente(numero) {
//     if (numero === 1) {
//         return 1
//     } else {
//         return numero * calcularFatorialRecursivamente(numero - 1)
//     }
// }

// console.log(calcularFatorialRecursivamente(10))

//==================================================================================================================
//==================================================================================================================
//==================================================================================================================



function calcularFatorialRecursivamente (n) {
    if (n === 1) {
        return 1;
    }
     
    return n * calcularFatorialRecursivamente (n - 1);
}
 
function calcularFatorial (fatorial) {
    if (isNaN(fatorial)) {
        return 'Não existe fatorial de um texto';
    }
     
    if (!Number.isInteger(fatorial) || fatorial < 0) {
        return 'Não existe fatorial de um número não natural';
    }
     
    if (fatorial === 0 || fatorial === 1) {
        return 1;
    }
     
    return calcularFatorialRecursivamente(fatorial);
}
 
console.log(calcularFatorial(5));