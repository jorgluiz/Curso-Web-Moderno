// estratégia 1 para gerar valor padrão
  function soma1(a, b, c){
      a = a || 1
      b = b || 1
      c = c || 1
      return a + b + c
  }

  console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))
//-------------------------------------------------------------------------------------------------
       // estratégia 2, 3 e 4 pera gerar valor padrão
  function soma2(a, b, c){
a = a !== undefined ? a : 1
//-------------------------------------------------------------------------------------------------
    //   dentro de arguments existe o índice 1, se existe, pegue o valor de B se não
   //   o valor padrão que é o valor 1
b = 1 in arguments ? b : 1
//------------------------------------------------------------------------------------------------
//   Se a variável 6 não retorna (NaN) o valor padrão, e caso seja um número retorne o valor C
       c = isNaN(c) ? 1 : c  // <<< estratégia mais segura!!!

      return a + b + c
  }

  console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))
//-------------------------------------------------------------------------------------------------

// O valor padrão de es2015
function soma3(a = 1, b = 1, c = 1){

    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))