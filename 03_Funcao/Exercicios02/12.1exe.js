// Como calcular a operação matemática de fatorial com JavaScript?
// Neste artigo vamos constuir um script que faça a operação de cálculo do fatorial de um número.

// Olá, pessoal!

// Hoje me deparei com uma postagem em um dos grupos de desenvolvimento que participo no Facebook. O criador da postagem estava com dúvidas de como calcular um número fatorial com o JavaScript.

// Como cursei Engenharia de Produção Mecânica, estou acostumado a lidar com cálculos matemáticos e logo me veio à cabeça a regra de cálculo, porém me surgiu uma dúvida: como o pessoal aborda esse tema por aí, aplicado à linguagem de programação?

// Após efetuar algumas pesquisas, decidi criar esse conteúdo com um pouco mais de profundidade baseado na matemática que envolve a operação de fatorial.

//  Para quem não se recorda como é a notação de um número fatorial, eles são representados por números inteiros seguidos de um ponto de exclamação. A regra matemática da representação e cálculo, de forma resumida é a seguinte:

// ?
// 1
// n! = n * (n - 1) * (n - 2)...
//  O fatorial de um número natural (n!), deve ser calculado efetuando multiplicações sucessivas do número natural (n) por ele mesmo sempre subtraindo 1, até que o multiplicador seja equivalente 1.


//  Vamos então recordar o funcionamento do cálculo do fatorial de algum número:

// ?
// 1
// 2
// 3
// 5! = 5 * (5 - 1) * (5 - 2) * (5 - 3) * (5 - 4)
// 5! = 5 * 4 * 3 * 2 * 1
// 5! = 120
//  O fatorial de cinco (5!) é correspondente a 120.


//  Facilmente nós podemos resolver isso, utilizando o laço de repetição for:

// ?
// 1
// 2
// 3
// 4
// 5
// 6
// var fatorial = 5;
// var resultado = fatorial;
// for (var i = 1; i < fatorial; i++) {
//     resultado *= i;
// }
// console.log(resultado);
//  Neste script temos:

//  Na linha 2, igualando o resultado com o fatorial porque a var resultado será utilizada como objeto multiplicador na operação de cálculo;

//  Na linha 3, estamos efetuando um laço de repetição que se inicia em 1 (representado pela instância da var i) que terá sua instrução (conteúdo entre chaves) repetida enquanto i for menor que fatorial;

//  Na linha 3 ainda, especificamos que para cada ciclo do laço de repetição, incrementaremos a variável i em 1 através de i++;

//  Na linha 4, fazemos através do operador de atribuição de multiplicação (*=) a multiplicação do valor da variável resultado pelo valor da variável i, e atribuímos o resultado da multiplicação à própria variável resultado;

//  Na linha 6, temos a apresentação do resultado da operação (120) através do console.log.


//  Para quem não se recorda do funcionamento do operador de atribuição de multiplicação, podemos transcrever a linha 4 para:

// ?
// 1
// resultado = resultado * i;

//  Este script estaria 100% correto, dado que o resultado matemático é o mesmo da operação de fatorial na matemática. O problema da aplicação desse script é que ele não segue em sua composição a lógica de programação baseada na operação matemática em si.

// Analisando a fórmula matemática, o número fatorial (n!) é sempre decrementado em 1 para haver a multiplicação, e este script que escrevemos usa incremento para obter o mesmo resultado.

// Matematicamente a operação de multiplicação está sendo calculada corretamente, porque "5 * 4 * 3 * 2 * 1" (método correto de cálculo do fatorial) tem o mesmo resultado que "1 * 2 * 3 * 4 * 5", dado que a multiplicação nada mais é que somas consecutivas, e neste caso, a ordem dos fatores não altera o produto. Porém "fundamentalmente" (baseando-se no fundamento do cálculo), esta aplicação está relativamente incoerente.

// Inverter a ordem de multiplicação dos fatores não é teoricamente um problema, dado que esta aplicação é simples, mas tendo esta mentalidade de desenvolvimento (atingir o mesmo resultado, não se importando com a metodologia empregada na construção do script), pode-se cometer muitos erros ao construir scripts mais complexos, principalmente porque esse tipo de prática confere complexidade a um script que na prática deveria ser mais simples de ser lido.


//  Ora, este não seria o fundamento por trás da aplicação de uma "gambiarra": atingir o mesmo resultado através de um script construído de forma não totalmente própria para a regra de negócio que rege o exercício proposto?


//  As boas práticas de desenvolvimento sugerem que um script precisa (ao máximo quanto for possível) falar por si só o que ele faz (sem a necessidade do seu autor explicar sua aplicabilidade).

// Isto significa que um script está incorreto ao buscar atingir o mesmo resultado sem garantir que a lógica de programação utilizada seja fiel à resolução correta do objetivo proposto, mesmo que funcione corretamente sem bugs.


//  Tendo em vista estas boas práticas de desenvolvimento, precisamos reescrever nosso script para que sua lógica de programação siga o conceito matemático de sua aplicação, trabalhando também com a linguagem da programação de forma clara:

// ?
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// var fatorial = 5;
// var resultado = fatorial;
// var primeiroMultipicador = fatorial - 1;
// for (var i = primeiroMultipicador; i > 1; i--) {
//     resultado *= i;
// }
// console.log(resultado);
//  Vejamos:

//  Na linha 3, estamos efetuando a subtração da primeira multiplicação (portando obtemos o multiplicador 4) da série de multiplicações do fatorial, pois o laço de repetição apenas irá decrementar o multiplicador para 3 no fim do primeiro loop. Do contrário a nossa primeira multiplicação seria 5 * 5 e não satisfaria a regra matemática do cálculo do fatorial;

//  Na linha 4, estamos efetuando o laço de repetição que se inicia em 4 (representado pela instância da var i);

//  Na linha 4 ainda, estamos fazendo um decremendo de i para cada execução da instrução do loop, enquanto a var i for maior do que 1, pois na matemática paramos a multiplicação quando chegamos em 1;

//  Na linha 5, fazemos através do operador de atribuição de multiplicação (*=) a multiplicação do valor da variável resultado pelo valor da variável i, e atribuímos o resultado da multiplicação à própria variável resultado;


//  Podemos melhorar um pouco esse script, porém ele acaba não mais seguindo com sinergia entre o cálculo matemático e a lógica de programação:

// ?
// 1
// 2
// 3
// 4
// 5
// 6
// var fatorial = 5;
// var resultado = 1;
// for (var i = fatorial; i > 1; i--) {
//     resultado *= i;
// }
// console.log(resultado);

//  Precisamos também ter em mente que:

//  Fatorial de zero (0!) é igual a 1;

//  Fatorial de um (1!) é igual a 1;

//  Fatorial não admite números negativos pois a regra é reduzir até 1. Ao fazer -5!, teríamos a subtração de um número negativo com outro, resultando em um número mais negativo, e assim tendendo a infinito;

//  Fatorial trabalha apenas com números naturais, portanto somente números inteiros (não decimais), e por definição de natural, também somente com números não negativos;

//  Considerando as regras matemáticas acima, podemos modificar nosso script para a seguinte forma:

// ?
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20
// 21
// 22
// 23
// function calcularFatorial (fatorial) {
//     if (isNaN(fatorial)) {
//         return 'Não existe fatorial de um texto';
//     }
     
//     if (!Number.isInteger(fatorial) || fatorial < 0) {
//         return 'Não existe fatorial de um número não natural';
//     }
     
//     if (fatorial === 0 || fatorial === 1) {
//         return 1;
//     }
     
//     var resultado = fatorial;
//     var primeiroMultipicador = fatorial - 1;
//     for (var i = primeiroMultipicador; i > 1; i--) {
//         resultado *= i;
//     }
     
//     return resultado;
// }
 
// console.log(calcularFatorial(5));
//  Portanto temos:

//  Na linha 1, instanciamos nossa função calcularFatorial recebendo por parâmetro o número a ser calculado seu fatorial;

//  Na linha 2, fazemos verificação do dado, utilizando a função isNaN (is Not a Number) para verificar se o valor recebido na variável fatorial é um texto;

//  Na linha 6, fazemos verificação do dado, utilizando o sinal de negação (!) com o método Number.isInteger() para verificar se o valor recebido na variável fatorial é um número decimal (não inteiro) ou se é um número negativo;

//  Na linha 10, verificamos se o valor recebido na variável fatorial é um ou zero e retornamos o resultado correto;

//  Na linha 23, temos a apresentação do resultado da operação (120) através do console.log requisitando a função e passando como parâmetro o número 5.


//  Desta forma garantimos que nosso script está seguindo de acordo com a lógica de programação baseando-se na regra matemática original.



// Recursividade
//  Há outra forma de fazermos esse cálculo aplicando recursividade com funções no JavaScript. Este conceito deixa o código mais abstrato, mas garante uma forma mais simplista e inteligente de se atingir o mesmo resultado.

// O conceito de recursividade no JavaScript se resume basicamente em uma função que chama ela mesma infinitamente até que alguma "estrutura de controle" interrompa esse "loop".


//  Para aplicar a recursividade neste caso, precisamos ter em mente algumas igualdades no cálculo do fatorial:

// ?
// 1
// 2
// 3
// 4
// 5
// 6
// 5! = 5 * 4 * 3 * 2 * 1
// 5! = 5 * 4 * 3 * 2!
// 5! = 5 * 4 * 3!
// 5! = 5 * 4!
// 5! = 5!
// 5! = 120
//  Sendo o fatorial uma representação de um conjunto de multiplicações, podemos efetuar multiplicações de fatoriais também como parte do cálculo de um fatorial de ordem maior. Neste exemplo acima, podemos ver que é possível na matemática multiplicarmos o fatorial de 3 (3!) com 4 e 5 para chegarmos ao resultado do fatorial de 5 (5!).


//  Indo mais adiante, recaptulando a fórmula básica do fatorial, temos:

// ?
// 1
// n! = n * (n - 1) * (n - 2)...
//  ... e convertendo essa lógica de cálculo para uma função recursiva na linguagem de programação, temos:

// ?
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// function calcularFatorialRecursivamente (n) {
//     if (n === 1) {
//         return 1;
//     }
     
//     return n * calcularFatorialRecursivamente (n - 1);
// }
//  Desta forma nós temos o termo "(n - 1)" sendo tratado como uma função de fato, multiplicando seu resultado por "n", e retornando esse resultado para a origem da solicitação da função.

//  Também inserimos um verificador para que quando "n" fosse igual a 1, retornasse 1 como resultado do fatorial, para que atenda à regra matemática e que essa recursividade não caia em loop infinito, pois do contrário, n estaria sendo subtraído com 1 eternamente.


//  Por fim criamos uma função responsável pela execução de validações do dado informado e para chamar a interação de recursividade:

// ?
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20
// 21
// 22
// 23
// 24
// 25
// function calcularFatorialRecursivamente (n) {
//     if (n === 1) {
//         return 1;
//     }
     
//     return n * calcularFatorialRecursivamente (n - 1);
// }
 
// function calcularFatorial (fatorial) {
//     if (isNaN(fatorial)) {
//         return 'Não existe fatorial de um texto';
//     }
     
//     if (!Number.isInteger(fatorial) || fatorial < 0) {
//         return 'Não existe fatorial de um número não natural';
//     }
     
//     if (fatorial === 0 || fatorial === 1) {
//         return 1;
//     }
     
//     return calcularFatorialRecursivamente(fatorial);
// }
 
// console.log(calcularFatorial(5));
//  Agora sim, esta é a forma mais inteligente de se atingir o resultado do cálculo de fatorial, e mais coerente e sinérgica com base na metodologia matemática.

// Bem, por hora é só, pessoal.