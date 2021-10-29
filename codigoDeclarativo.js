//paradigma FUNCIONAL

const notas = [8.7, 6.8, 7.7, 7.7, 9.2, 5.3, 8.0]

const somar = (a,b) => a + b
const dividir = (a,b) => a / b

const mediaTurma = dividir(notas.reduce(somar), notas.length)

console.log(mediaTurma.toFixed(2))