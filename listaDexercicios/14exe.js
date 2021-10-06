// Resolução 1



function filtrarNumeros(array) {
    const resultado = []

    for (let item of array)
        if (typeof item === "number")
            resultado.push(item)

    return resultado
}

Exemplos:
filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
filtrarNumeros(["a", "c"]) // retornará []






// Resolução 2

function filtrarNumeros(array) {
return array.filter(item => typeof item === "number")
}