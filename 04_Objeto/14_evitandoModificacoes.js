 /* Object.preventExtensions
 -Posso excluir atributos  
 -Posso modificar atributos  
 -Não posso adicionar atributos                                                                                                         */


const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag  //exluindo um atributo 
console.log(produto)

console.log('**********************************************')

/*Object.seal ***
-Não posso excluir atributos  
-Não posso add  atributos
-Mas posso modificar o objeto                                                                                                          */


const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

/* 
Object.freeze = selado + *valores constantes*
-Não posso add       atributos
-Não posso deletar   atributos
-Não posso modificar atributos*/