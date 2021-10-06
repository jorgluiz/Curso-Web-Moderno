// function anoDoMes(mes) {
//     switch (mes) {
//         case 1: "Janeiro"
//             break
//         case 2: "Fervereiro"
//             break
//         case 3: "março"
//             break
//         case 4: "abril"
//             break
//         case 5: "maio"
//             break
//         case 6: "junho"
//             break
//         case 7: "julho"
//             break
//         case 8: "agosto"
//             break
//         case 9: "setembro"
//             break
//         case 10: "outubro"
//             break
//         case 11: "novembro"
//             break
//         case 12: "dezenbro"
//             break

//         default: 
//         return  console.log("Digite um mês válido por favor")
//     }
//     return mes

// }

// console.log(anoDoMes(14))



function receberNomeDoMes(numero) {
    const mapeamento = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
    'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return mapeamento[ --numero ];
    }

    console.log(receberNomeDoMes(1))