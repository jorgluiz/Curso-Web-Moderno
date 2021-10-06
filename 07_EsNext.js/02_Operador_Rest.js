// Arrow Function
const soma = (a, b) => a + b
console.log(soma(2, 3))


// função arrow com corpo {} *** Obrigatório colocar return
const soma1 = (a, b) => {
   return a + b
}
console.log(soma1(2, 3))


//Arrow function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({}) // .bind * Apontar para o objeto que criei 
lexico1()
lexico2()

// Parâmetro default
function log(texto = 'Node') {
    console.log(texto)
}

log() //valor padrão
log('Sou mais forte')

// Operador -> rest -> (agrupar in um array)
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))