const pai = { nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

console.log('*************************************************')

// primeiro parametro é pai segundo parametro é o objeto {}
const filha2 = Object.create(pai, { 
    nome: { value: 'Biazinha', writable: false, enumerable: true}
})
console.log(filha2.nome)
 
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log('*************************************************')

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2){
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`)
/*Se essa condição for               true        else             false
verdadeira. */
}

