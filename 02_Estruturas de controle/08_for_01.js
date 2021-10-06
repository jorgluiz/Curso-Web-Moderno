let contador = 1

while(contador <= 10){
    console.log(`contador = ${contador}`)
    contador++
}

console.log() //pula uma linha

//------------------------------------------------
for(let i = 1; i <= 10; i++){
        
    console.log(`i = ${i}`)

    if(i == 7){
        break
    }
}
    
//------------------------------------------------



console.log() //pula uma linha

//array com for
const notas = [6, 7, 9, 8, 7]

 for(let i = 0; i < notas.length; i++){
     //console.log(`nota = ${notas[i]}`)
     console.log(`indice ${i} notas ${notas[i]}`)
 }

 console.log('the and')
