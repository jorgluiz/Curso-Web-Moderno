// set -> não aceita repetição / não é indexada

const times = new Set()
times.add('Vasco')
times.add('são paulo').add('palmeiras').add('conrinthians')
times.add('flamengo')

console.log(times)
console.log(times.size)
console.log(times.has('vasco')) //false pq a primeira letra que foi ADD é maiúscula
times.delete('flamengo')
console.log(times.has('flamengo'))

const nomes = ['raquel', 'locas', 'julia', 'lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)

//console.log(typeof Set)
