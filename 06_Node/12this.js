console.log(this === global)    // This fora de uma função não aponta pra global
console.log(this === module)

console.log(this === module.exports) //true
console.log(this === exports)        //true


//-----------------------------------------------------------------------------------------


function logThis() {
    console.log('Dentro de uma função...')

    console.log(this === global) //true  // This dentro de uma função aponta pra global
    
    console.log(this === module)//false
    console.log(this === exports)//false
    console.log(this === module.exports)//false

    this.perigo = '...' //dentro do scop global
}

logThis()



