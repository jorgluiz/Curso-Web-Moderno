//ERRADO

function calculadora(a, b,){
    switch (a, b){

        case (a + b):
            break;
        case 'a - b':
            break;
        case 'a * b':
            break;
        case 'a / b':
            break;
            default:
                return 'numero invalido'
    }

}
console.log(calculadora(10,2))
console.log(calculadora(2, 2))
console.log(calculadora(5, 2))
console.log(calculadora(10,2))
console.log(calculadora('jr'))
//----------------------------------------------------

function calculadora (valor1, operacao, valor2) {
    switch (operacao) {
        case '+':
            return valor1 + valor2
        case '-':
            return valor1 - valor2
        case '*':
            return valor1 * valor2
        case '/':
            return valor1 / valor2
        default:
            return 'Operação inválida'
    }
}

console.log(calculadora(2, '+', 3));
console.log(calculadora(2, '-', 3));
console.log(calculadora(2, '*', 3));
console.log(calculadora(3, '/', 11).toFixed(2));
console.log(calculadora(2, 'a', 3));
