let num1 = 1
let num2 = 2

//pós fixada, acrescenta uma unidade ao valor da variável
num1++
console.log(num1)

//prefixada
--num1
console.log(num1)

//estritamente igual ( === )
/*output (true) porque o ++ antes (prefixado) acrescenta primeiro na variavel (num1),
depois que **mostra o resultado ele subtrai (num2--)*/
          //(1 + 1)    ( 2 )
console.log(++num1 === num2--)
console.log(num1, num2)

console.log(num1 === num2)