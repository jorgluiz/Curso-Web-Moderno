function numeroPares(){

    for(i = 0; i < 51; i++){

        if(i % 2 == 0){

            console.log('Nº Par ',  i)
        }else{
            console.log('Nº impar', i)
        }
    }
    
}

numeroPares()

console.log('******************************************')

function acharPares () {
    for (let i = 1; i <= 100; i++){

        if (i % 2 == 0)
         {
            console.log(i)
        }
    }
}

acharPares()