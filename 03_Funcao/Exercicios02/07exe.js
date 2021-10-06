// 3x² -5x + 12

// O valor de "a" não pode ser igual a zero;
// Delta negativo, a equação não possui raízes reais;
// Delta igual a zero, a equação possui raízes reais iguais; e
// Delta positivo, a equação possui duas raízes reais e distintas.

function bhaskara(ax2, bx, c){
    let resultados = []
    let delta = (bx ** 2) - (4 * ax2 * c)
    if(delta < 0){
        return "Delta é negativo"
    }else{
    
    let x1 = (-bx + Math.sqrt(delta)) / 2*ax2
    let x2 = (-bx - Math.sqrt(delta)) / 2*ax2
    resultados.push(x1)
    resultados.push(x2)
    return resultados

    }
}

console.log(bhaskara(1, -3, 2))
// console.log(bhaskara(1, -5, 6))   //[ 3, 2 ]
// console.log(bhaskara(3, 1, 2))    //Delta é negativo





