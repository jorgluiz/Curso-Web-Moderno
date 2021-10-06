console.log('01)', '1' ==  1)     // os dois são iguais?      true
console.log(typeof '1', typeof 1)


console.log('02)', '1' === 1)     // são estritamente igual?  false
console.log('03)', '3' !=  3)     // 3 é diferente de 3?      false
console.log('04)', '3' !== 3)     // estritamente diferente?  true

console.log('05)',  3 < 2)        
console.log('06)',  3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)

//OBS: comparando referência de memória 
console.log('09)', d1 === d2) // d1 é estritamente igual a d2? false
console.log('10)', d1 == d2)//   d1 é igual a d2?  false
console.log(typeof d1, typeof d2)
 
console.log('11)', d1.getTime() === d2.getTime())// é estritamente igual? true| Tem o mesmo tipo e mesmo valor (new date(0))

console.log('12)', undefined == null)
console.log('13)', undefined === null)