//Par de colchetes Array -> const prod = [] .
//Par de chaves é uma forma literal escrever um OBJETO. {} objeto vazio .
//Se o objeto estiver vazio, nem tem atributos nem comportamento
//em JavaScrip pode criar um objeto e definir como é esse objeto
//quais são os atributos, comportamentos e funções, DINAMICAMENTE !!!
//ex: const prod1 = {}

//-------------------------------------------

const prod1 = {}
//valores de forma dinâmica
prod1.nome  = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço   'DescontoLegal'

console.log(prod1)

const prod2 = {
     nome: 'Camisa Polo',
     preco: 79.90,

    //Estrutura aninhada de objeto
      obj: {
          blabla: 1,
          obs: {
              blabla: 2
          }
      }

}

console.log(prod2)

//OBS: json é formato textual. Objeto: atributos, comportamentos e função...

// json
'{"nome": "Camisa Polo", "preco": 79.00}'