//declarando um array vazio []
const funcs = []

// ( var ) não tem escopo de função
for(var i = 0; i < 10; i++){
        //função anônima
    funcs.push(function(){
        console.log(i)

    })
     
}

//vai ser imprimido o valor 10 //OBS: tipo VAR
funcs[2]()

