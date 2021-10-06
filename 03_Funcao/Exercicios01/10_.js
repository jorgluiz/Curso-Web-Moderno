function divisivel(numero){
    
    if(numero % 3 == 0 ){

     console.log(`numero é divisivel  por 3: ${true}`)

    }else{
        
     console.log(`numero não divisivel por 3: ${false}`)
    }
    return numero 
}

console.log(divisivel(9))

console.log('-----------------------------------------------')

function verificaNumero (numero) {
    if(numero % 3 == 0){
        return true
    }else{
        return false
    }
}

console.log(verificaNumero(3))
console.log(verificaNumero(2))
console.log(verificaNumero(150))