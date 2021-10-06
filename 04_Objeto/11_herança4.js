function MeuObjeto() {} //criando um object apartir de uma fução
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto //Object é uma função. Quando adicionado o new Object, se torna uma função construtora instanciando um objeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'anônimo'
MeuObjeto.prototype.falar = function() {
    console.log('Bom dia! Meu nome é', this.nome)
    //console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar() 

obj2.nome = 'Rafael'
obj2.falar()

console.log('*** *** ***')

//criando object com notação literal/ obj3 recebe MeuObjeto.prototype
const obj3 = {}
obj3.__proto__= MeuObjeto.prototype
obj3.nome = 'obj3'
obj3.falar()

// Resumo 

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)

console.log(Object.prototype.__proto__)
console.log(Object.prototype)