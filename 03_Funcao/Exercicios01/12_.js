// Facilmente nós podemos resolver isso, utilizando o laço de repetição for:

var fatorial = 5;
var resultado = fatorial;
for (var i = 1; i < fatorial; i++) {     //(baseando-se no fundamento do cálculo), esta aplicação está relativamente incoerente.
    resultado *= i;                      //Não é boas práticas de desenvolvimento!!!
}
console.log('(01)', resultado);


console.log('---------------------------------------------------------')


var fatorial01 = 6;
var resultado = fatorial01;
var primeiroMultipicador = fatorial01 - 1;
for (var i = primeiroMultipicador; i > 1; i--) {  //Podemos melhorar um pouco esse script, porém ele acaba não mais seguindo com sinergia entre o cálculo matemático e a lógica de programação:
        resultado *= i;
}
console.log('(02)', resultado);

console.log('---------------------------------------------------------')


var fatorial02 = 7;
var resultado = 1;
for (var i = fatorial02; i > 1; i--) {
    resultado *= i;
}
console.log('(03)', resultado);



console.log('-------------function calcularFatorial-------------------')

function calcularFatorial (fatorial) {
    if (isNaN(fatorial)) {
        return 'Não existe fatorial de um texto';
    }
     
    if (!Number.isInteger(fatorial) || fatorial < 0) {         //Desta forma garantimos que nosso script está seguindo de acordo com a lógica de programação baseando-se na regra matemática original.
        return 'Não existe fatorial de um número não natural';
    }
     
    if (fatorial === 0 || fatorial === 1) {
        return 1;
    }
     
    var resultado = fatorial;
    var primeiroMultipicador = fatorial - 1;
    for (var i = primeiroMultipicador; i > 1; i--) {
        resultado *= i;
    }
     
    return resultado;
}
 

console.log('(04)', calcularFatorial('oi'));
console.log('(04)', calcularFatorial(-5));
console.log('(04)', calcularFatorial(8));


console.log('-------------------função recursiva----------------------')


function calcularFatorialRecursivamente (n) {
    if (n === 1) {
        return 1   //return. Não caia em loop infinito, pois do contrário, n estaria sendo subtraído com 1 eternamente.
    }
     
    return n * calcularFatorialRecursivamente (n - 1)
}

console.log('(05)', calcularFatorialRecursivamente(9))



console.log('--------------------function----------------------------')
 
function calcularFatorial (fatorial) {
    if (isNaN(fatorial)) {
        return 'Não existe fatorial de um texto';
    }
     
    if (!Number.isInteger(fatorial) || fatorial < 0) {
        return 'Não existe fatorial de um número não natural';
    }
     
    if (fatorial === 0 || fatorial === 1) {
        return 1;
    }
     
    return calcularFatorialRecursivamente(fatorial);
}
 
console.log('(06)', calcularFatorial(10));


console.log('---------------------function----------------------------')


function fatoriall (fatorial07) {
    if(fatorial07 == 0){
        return 1
    }else {

        var resultadol07 = fatorial07
        var multiplicador = fatorial07 -1
    for (var i = multiplicador; i > 1; i--) {  //OBS: nessa função!!!
                resultadol07  *= i
    }
 }
    return resultadol07   
}

console.log('(7)', fatoriall(11))


console.log('---------------------function---------------------------')

function fatoriaal (numero) {
    if(numero == 0){
        return 1
    } else {
        return (numero * fatoriaal(numero - 1))
    }
}

console.log('(08)', fatoriaal(12))



console.log('---------------------------------------------------------')