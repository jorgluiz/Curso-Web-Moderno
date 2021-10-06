// Usando a notação literal 
const obj1 = {}
console.log(obj1)

//Object apartir de uma função construtora
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)


console.log('\n ************************')

//Criando a minha própria Função Construtora
function Produto(nome, preco, desc) { 
    this.nome = nome                   // this essa variável se torna PÚBLICA. Não se encontra encapsulada, dentro do objeto
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 299.9, 0.25)
console.log(p1.getPrecoComDesconto().toFixed(2), p2.getPrecoComDesconto().toFixed(2))

console.log('************************')

// Função factory 
function criaFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/ 30) * (30 - faltas)
        }
    }
}

const f1 = criaFuncionario('Joao', 7980, 4)
const f2 = criaFuncionario('Maria', 7740, 1)
console.log(f1.getSalario(), f2.getSalario(), "\n")

// Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Um função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON)