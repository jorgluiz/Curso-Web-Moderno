for (let letra of 'Cod3r') { //for of percorrer os elementos
    console.log(`${letra}`)
}

console.log('\n')//******************************** */

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) { //for in percorrer o índice
    console.log(i)
    //console.log(i, assuntosEcma)
}

console.log('\n')//******************************** */


//FOR OF serve para acessar um array quando tem "string" ou "letras"
for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

//console.log(assuntosMap())

for (let assunto of assuntosMap) {
    console.log(assunto)
}

for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

for (let valor of assuntosMap.values()) {
    console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}