// const a = 1
// const b = 2
// const c = 3

// const obj1 = {a: a, b: b, c: c}// esse notação não se usa mais (duplicidade)
// const obj2 = {a, b, c}
// console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3) 

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
     funcao1: function(){
         console.log('Uma funcao aqui')

     },
     funcao2(){
        // console.log('Uma funcao aqui')
     }
}   
       
console.log(obj5)
console.log(obj5.funcao1())

