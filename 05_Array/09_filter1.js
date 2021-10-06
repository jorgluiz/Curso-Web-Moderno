const produtos = [
    { nome: 'Notbook', preco: 2499, fragil: true},
    { nome: 'Ipad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]


console.log(produtos.filter(function(p){   //filtrando os elementos do array

          //return p.preco > 2500   
            return false              //> array vazio
          //return true  > todo array
         
}))

const caro   = produto => produto.preco >= 500
const fragil = produto => produto.fragil //== true

console.log(produtos.filter(caro).filter(fragil))




//------------------------------------------------------------
/*filter: retorna uma nova coleção 
contendo apenas aqueles elementos da coleção original que 
satisfazem um dado predicado
*/