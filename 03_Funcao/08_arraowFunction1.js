//função normal
let dobro = function (a){
    return 2 * a
}
console.log(dobro(2))

console.log('------------------')
//Sobrescrevendo variável DOBRO
dobro = (a) => {   //Função arrow. A função arrow é sempre uma função anônima 
    return 2 * a
}
console.log(dobro(2))

console.log('------------------')

dobro = a => a * 2 // return implícito
console.log(dobro(Math.PI).toFixed(2))

console.log('------------------')

let ola = function () {
    return 'Olá'
}
console.log(ola())

console.log('------------------')

ola = () => 'Olá'
ola =  _ => 'Olá' // possui um parâmetro 
console.log(ola())