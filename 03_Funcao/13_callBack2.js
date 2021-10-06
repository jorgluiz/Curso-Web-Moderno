const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//API do array
//Sem callBacK
const notasBaixas1 = [] //array vazio []
for (let i in notas) {
    if (notas[i] < 7){
         notasBaixas1.push(notas[i]) // push = adicionar novos elementos no array
    }
}

console.log('ex:1/ ', notasBaixas1)

// Com callBacK ---------------------------------------------------------------------

const notasBaixas2 = notas.filter(function (nota) {
     return nota < 7
})

console.log('ex:2/ ', notasBaixas2)


//função arrow com filter ------------------------------------------------------------

const notasBaixas3 = notas.filter(nota => nota < 7)
  console.log('ex:3/ ', notasBaixas3)


  
//função arrow, com uma variável declarada (notasMenorQue7)
const notasMenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenorQue7)
console.log('ex:4/ ', notasBaixas4)