function calcularSalarioLiquido(horasTrabalhadas, ganhoPorHora) {

    const salarioBruto = horasTrabalhadas * ganhoPorHora
    const salarioLiquido = salarioBruto - salarioBruto * 2/100
    return `Salário igual a R$ ${salarioLiquido}`
    }


console.log(calcularSalarioLiquido(240, 5)) // retornará "Salário igual a R$ ???