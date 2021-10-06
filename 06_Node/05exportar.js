console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)
//_____________________________________\\


//export
this.a = 1

//export
exports.b = 2

//export
module.exports.c = 3

exports = null
console.log(module.exports)


//forma incorreta de export
exports = {
    nome: 'Teste'
}

//forma correta de export
module.exports = { publico: true }