// objeto é uma coleção dinâmica de pares chave/valor

//dinamicamente add atributos
const produto = new Object  //Object é uma função. Quando adicionado o new Object, se torna uma função construtora instanciando um objeto
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['Marca do produto']
console.log(produto)

console.log('\n ******************************')

// objeto é uma coleção dinâmica de pares chave/valor

//objeto
const carro = {
    modelo: 'A4',
    valor: 8900,
    proprietario: {
        nome: 'Raul',
        idedade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
   condutores: [{
        nome: 'Junior',
        idade: 19
   }, {
       nome: 'Ana',
       idade: 42
   }],
   calcularValorSeguro: function() {

   }
       
}

carro.proprietario.endereco.numero = 7
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)



//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)