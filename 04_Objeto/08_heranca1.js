const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200 
}


//obs: o objeto ferrari não tem o atributo 
//                 .prototype
console.log(ferrari.prototype)
//     o objeto ferrari tem o atributo
//                 .__proto__
console.log(ferrari.__proto__)

console.log(ferrari.__proto__ === Object.prototype)

console.log(volvo.__proto__ === Object.prototype)

console.log(Object.prototype.__proto__ )

console.log('*** *** ***')


function MeuObjeto() {}

console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)