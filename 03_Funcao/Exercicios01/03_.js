function matematica(base, exp){

    base = 3
    exp  = 3

    return base **= exp
}

console.log(matematica())


console.log('-----------------------------------------')

//------------------------------------------------------

function expoente(base, expoente) {
    //Podemos fazer de 2 modos
    
    let resultado = Math.pow(base, expoente) //Método antigo:
    
    resultado = base ** expoente  //Método novo:

    return resultado
}

console.log(expoente(3, 2))

