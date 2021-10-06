const imprimirResultado = function (nota) {
    if (nota >= 10 ) {
            console.log('Quadro de Honra')

    } else if(nota >= 6 & 7) {
            console.log('Aprovado')

    } else if(nota == 5.5 & 5){
        console.log('Recuperação')

    }else if(nota == 1){
        console.log('Reprovado')
    
    } else {
        console.log('Nota inválida')

    }

}

imprimirResultado(5)



