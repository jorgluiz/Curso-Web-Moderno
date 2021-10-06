function teste1(num){
    if(num > 7)
        console.log(num)
        //console.log('Final')
}

teste1(2)
teste1(8)

console.log('\n')

function teste2(num){
    if(num > 7) /*;*/ { // cuidado com ';', não usar com as estruturas de controle
         console.log(num)
    }
}

teste2(6)
teste2(9)