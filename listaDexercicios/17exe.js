function checarAnoBissexto(ano) {

    const divisivelPorQuatro = ano % 4 == 0
    const divisivelPorCem = ano % 100 == 0
    const divisivelPorQuatrocentos = ano % 400 == 0
    return (divisivelPorQuatro && !divisivelPorCem) || divisivelPorQuatrocentos
    
    }


    console.log(checarAnoBissexto(2022)) // retornará true
  


    // Resolução 2

// checa-se indiretamente, verificando se o mês de fevereiro do dado ano tem 29 dias
function checarAnoBissexto(ano) {
return new Date(ano, 1, 29).getDate() === 29;
}


console.log(checarAnoBissexto(2021)) // retornará true