/*const arr = ['Julio', 'Richarde', 'Moreira', {idade: 29}, 1,2,4,5]
var quantidade  = arr.length
console.log(`a quantidade é `, quantidade, '\n' )

while (quantidade > 0){
    console.log(arr[--quantidade])
    if(quantidade === 3){
        console.log(arr[quantidade].idade)
    }
}*/



const arr = ['Julio', 'Richarde', 'Moreira', {idade: 29}, 1,2,4,5]
function attArr(){
 arr.push('String Adicionada')
 arr.push(['um', 'dois', 'tres'])
 arr.push(function soma(x = 1, y = 2){
    return x + y
})

 return arr
}

//console.log(`elementos são ${attArr()}, elemento idade é ${arr[3]}`)
console.log(attArr())

