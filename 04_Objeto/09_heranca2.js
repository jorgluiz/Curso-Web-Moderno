// Cadeia de protótipos (prototype chain)

//Object.prototype.atributo0 = '0'  // não faça isso em casa

const avo   = { atributo1: 'A' }
const pai   = { __proto__: avo, atributo2: 'B' }
const filho = { __proto__: pai, atributo3: 'C' }

console.log(filho.atributo1, filho.atributo2, filho.atributo3)
console.log(filho.atributo0)//    colocando o filho.atributo0 com um atributo que não existe (indefined).
                            // pq esse atributo0 não tem em nenhum das variáveis filho, pai, avo,
                            // colocando um valor no ( Object.prototype.atributo0 = '0') o filho vai encontrar esse valor, por conta do 
                            // avô que vai está apontando para o Object.prototype


console.log('********************************************** \n')


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        }else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

//objeto
let ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

//objeto
let volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}
/*Estabelecer uma relação entre ferrari e carro{} ou seja ferrari vai obter os atributos de "carro" como
seu prototype. */
   // .setPrototypeOf  < função          1: exemplo                                                                  
Object.setPrototypeOf(ferrari, carro)   

/*Estabelecer uma relação entre volvo e carro{} ou seja ferrari vai obter os atributos de "carro" como
seu prototype. */   
const v = {__proto__: carro, mod: volvo}

console.log(ferrari)
console.log(v.mod)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())

console.log('*******************************************')
//                                       2: exemplo 
// outro maneira de estabelecer relação 
ferrari = { __proto__: carro, velAtual: 50, velMax: 195}
volvo   = { __proto__: carro, velAtual: 30, velMax: 195}

console.log(ferrari)
console.log(volvo)


