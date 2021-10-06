// objeto é uma coleção dinâmica de pares CHAVE/VALOR

const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))  // keys/ pega a chave do object
console.log(Object.values(pessoa)) // values/ pega o valor do object
console.log(Object.entries(pessoa))// entreis/ pega os registros, array com chave e valor


Object.entries(pessoa).forEach (([chave, valor]) => {
    console.log(`${chave}: ${valor}`)

})

console.log('****************************************')

/*Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})*/

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2021'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

console.log('****************************************')

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2}
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)// freeze não deixa modificar o atributo do objeto
obj.c = 1234// tentando modificar o atributo
console.log(obj)