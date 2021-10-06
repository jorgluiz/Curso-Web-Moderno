Resolução 1
function cumprimentar(nome) {
const saudacao = "Olá"
return [saudacao, nome].join(', ').concat("!")
}
Resolução 2
function cumprimentar(nome) {
return "Olá, " + nome + "!"
}
Resolução 3
function cumprimentar(nome) {
return `Olá, ${nome}!`
}


cumprimentar("Leonardo") // retornará "Olá, Leonardo!"
cumprimentar("Maria") // retornará "Olá, Maria!"