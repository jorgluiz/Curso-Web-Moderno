const contadorA = require('./07.1instanciaUnica')
const contadorB = require('./07.1instanciaUnica')

             //retornando uma função + objeto   () factory
const contadorC = require('./08.2instanciaNova')()
const contadorD = require('./08.2instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log('contadorA =', contadorA.valor, 'contadorb =', contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log('contadorC =', contadorC.valor, 'contadorD =', contadorD.valor)