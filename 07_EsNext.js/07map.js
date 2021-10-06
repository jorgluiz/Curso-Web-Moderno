const tecnologia = new Map()
tecnologia.set('react', { framework: false})
tecnologia.set('angular', { framework:true})

console.log(tecnologia.react)// forma errada
console.log(tecnologia.get('react')) //forma correta " get " 

const chavesVariadas = new Map([

    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],

])
 
chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl) 
})

console.log(chavesVariadas.has(123)) //true
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123)) //false

console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
console.log(chavesVariadas)