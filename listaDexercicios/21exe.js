function triangulo(base, altura){
    are = 0
    
    if(base === 0){
      console.log('medida invalida')
    
    }else are = (base * altura) / 2

    return Math.floor(are)

}

console.log(triangulo(3.7, 5).toFixed(2))



// Resolução:


function areaDoTriangulo(base, altura) {
const area = (base * altura) / 2
return area.toFixed(2) // irá arredondar para manter 2 casas decimais
}

console.log(areaDoTriangulo(10, 15)) // retornará "75,00"
console.log(areaDoTriangulo(7, 9)) // retornará "31,50"
console.log(areaDoTriangulo(9.25, 13.1)) // retornará "60.59"