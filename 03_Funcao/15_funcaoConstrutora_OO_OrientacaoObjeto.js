// função construtora: comportamentos e atributos

function Carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado
    let velocidadeAtual = 0

    //método publico  (this.)
    this.acelerar = function(){
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    //método publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}  


const uno = new Carro()  //instanciando a função construtora a partir do ( new )
uno.acelerar()
console.log(uno.getVelocidadeAtual())

//*** Ferrari é um objeto que foi distanciado a partir de uma função
const ferrari = new Carro(350, 20) //Função construtora. // // new carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro) //Função
console.log(typeof uno) //Objeto
console.log(typeof ferrari) //Objeto
