function verificacaoDeString (string1, string2) {
    let estaContido = true;
    for (let i = 0; i < string1.length; i++) {
        let caractereString1 = string1.charAt(i).toLowerCase()
        for(let j = 0; j < string2.length; j++){
            let caractereString2 = string2.charAt(j).toLowerCase()
            if(caractereString1 == caractereString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if(!estaContido) {
            return estaContido
        }
    }
    return estaContido

 }

 console.log(verificacaoDeString('abc','cba'))
 console.log(verificacaoDeString('1bc','cba'))

 

 //************************************************************//
 //  Retorne o primeiro caractere de uma string: .charAt(0)
//   Converta a string em letras minúsculas:     .toLowerCase()
var str = "HELLO WORLD";
var res = str.charAt(0).toLowerCase();

console.log(res)