const valor = 'Global'     //variavel é global por conta que ela voi declara fora do escopo {}

function minhaFuncao(){
console.log(valor)

}

function exec(){
    const valor = 'local'  //variavel é privada por conta que foi declara dentro do escopo {'local'}
    minhaFuncao() // 'Global'
}

exec() 