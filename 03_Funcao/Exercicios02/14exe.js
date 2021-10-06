let frutas = "maçã, kiwi, melancia"

let fruta = function comprar(frutas) {
    switch (frutas) {
        case "maçã":
            return "Não vendemos esta fruta aqui"
        case "kiwi":
            return "Estamo em escassez de kiwis"
        case "melancia":
            return "Aqui está, são 3 reais o quilo"

            default: "Nome de frunta invalido"
    }
}

console.log(fruta("maçã"))
console.log(fruta("kiwi"))
console.log(fruta("melancia"))

//or 

function venderFruta (fruta) {
    switch (fruta) {
        case 'maçã':
            console.log('Não vendemos esta fruta aqui.')
            break
        case 'kiwi':
            console.log('Estamos com escassez de kiwi.')
            break
        case 'melancia':
            console.log('Aqui está, custa R$ 3,00 o quilo.')
            break
        default:
            console.log('Erro, fruta inválida.')
    }
}

venderFruta('maçã')
venderFruta('kiwi')
venderFruta('melancia')
venderFruta('alcatra')