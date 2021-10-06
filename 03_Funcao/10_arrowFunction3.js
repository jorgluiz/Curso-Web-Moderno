//importante// OBS: Função normal, o this aponta pra o GLOBAL *******
let comparaComThis = function (param) {
    console.log(this === param)
}
comparaComThis(global) //true
console.log('-------------------')

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) //false
comparaComThis(obj)    //true

//importante// OBS: Função arrow, o this não aponta para o GLOBAL *******
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) //false
comparaComThisArrow(module.exports) //true

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) //false
comparaComThisArrow(module.exports) //true


