const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice){
    console.log(`${indice +1}. ${nome}`)
}
fabricantes.forEach(imprimir)

console.log('\n ex 1: function normal')
fabricantes.forEach(function(fabricante){
    console.log(fabricante)

})

console.log('\n  ex 2: function arrow')
fabricantes.forEach(fabricante => console.log(fabricante))