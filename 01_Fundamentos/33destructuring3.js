function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)  //Retorna valor arredondado para baixo para o número inteiro mais próximo

}

const obj = {max: 50, min: 40}
console.log(rand(obj))
console.log(rand({min: 990}))
console.log(rand({}))
//console.log(rand())
