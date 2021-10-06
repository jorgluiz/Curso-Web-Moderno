function calcularValor(mes, valor){
    if(mes >= 1 && mes <= 12) {
        atraso = mes - 1
        return (valor * ((1 + (5/100))**atraso)).toFixed(2)
    } else {
        return 'Mês inválido.'
    }
}

console.log(calcularValor(1, 5))
