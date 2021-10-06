// novo recurso do ES2015

//criando um objeto
const pessoa = {
    nome: 'Ana',
    idade: 7,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 1000
    }
}
//console.log(pessoa)

//extraindo, nome e idade da estrutura (***pessoa***)
const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i } = pessoa
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa // Tentando tirar algo que 
console.log(sobrenome, bemHumorada)            // não tem dentro de objeto

//desestruturando um dado aninhado
const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

/*desestruturando um dado aninhado, que não existe em pessoa (erro)
const {conta: {ag, num}} = pessoa
console.log(ag, num)*/

//TypeError: Cannot read property 'ag' of undefined