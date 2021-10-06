// tagged templates - processa o template dentro de uma função
function tag(parte, ...valores) {
    console.log(parte)
    console.log(valores)
    return 'Outra String'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao},`)