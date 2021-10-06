// par nome/valor
const saudacao = 'opa' // contexto léxico 1

function exec(){
    const saudacao = 'fala' // contexto léxico
    
    return saudacao
}

//console.log(saudacao)

// objetos são grupos aninhados pares nome/valor
const cliente = {
    nome: 'Junior',
    idade: 29,
    peso: 80,
    endereco: {
        logradouro: 'Rua Perdiz', numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)