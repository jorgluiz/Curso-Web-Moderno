
//*A variavel (let i ) só está visível dentro do bloco {}                            *//
 
for (let i = 0; i < 10; i++){
    console.log(i)
}

//Variavel ( i ) não está disponível
//for do tipo VAR ele vai ser lida fora do bloco
console.log('i = ', i)
// Erro a variavel não está definida