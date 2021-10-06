class Pessoa {
   constructor(nome, idade){
       this.nome = nome
       this.idade = idade
   } 
   falar(){
       console.log(`Meu nome é ${this.nome}. tenho ${this.idade} anos`) 
   }
}

const p1 = new Pessoa('Jorge', 30)
p1.falar()

console.log('-----------------------------------------------------------')

const criarPessoa = nome => {
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Jorginho')
p2.falar()