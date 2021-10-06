// Função em JS é first-Class Object (Citizens)
// *** Higher-order function = Função de alta ordem. ***

// Criar de forma literal **************************************
/**Função pode receber parâmetros e pode retornar um valor */
function fun1() { //não tem parametros
    //não tem retorno
}

// Armazenar uma function (Função) em uma variável
const fun2 = function(a, b) {
    //return a + b
}
// Chamando a função
fun2()

// Armazenar função em um array
//declarando a função dentro do array, não é comum!!!
const array = [function(a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {} // Objeto vazio
obj.falar = function () {
   
   return 'Opa' 
}
console.log(obj.falar())

// Passar função como parâmetro
function run(fun){
   fun()
}

// Passar function como parâmetro, pra outra function
run(function () { console.log('Executando...') })

//-----------------------------------------------------
//Uma função pode retornar outra função

function soma(a, b){
   return function(c) {
      console.log(a + b + c)
      //return a + b + c
   }
}

//chamando a função diretamente
//soma(2, 3)(4)
    
   //or
//armazenar em uma variável
const cincoMais = soma(3, 3)
cincoMais(4)






//console.log(soma(2, 3)(4))