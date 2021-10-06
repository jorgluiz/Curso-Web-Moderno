// let e const 
{ 
    var a = 2
    let b = 3

    console.log(b) // let só é lido dentro do bloco {}
}
console.log(a) // var pode ser lido fora do bloco 


// Template String
const produto = 'Ipad'
console.log(`${produto} é caro`)


// Operador *Destructuring*

                       //string
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)
console.log(tras.length)

//array
const [x, ,y] = [1, 2, 3]
console.log(x, y)

//object
const {idade, nome} = {nome: 'Ana', idade: 9}
console.log(idade, nome) 




