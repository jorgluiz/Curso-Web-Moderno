// function.apply(this, [arg1, arg2])
// retornar o this do contexto que eu enviar

this.name = "Camila"
this.age = 25

function sayMyName(age) {
    this.age = age
    console.log(this.name, this.age)
}

const dev = { 
    name: "Isabela"
}


sayMyName.apply(this, [18])



//-----------------------------------

function multiply() {
    const args = Array.from(arguments)
    return args.reduce((acc, item) => {
        return acc * item
    }, 1)
}

const total = multiply.apply(this, [2, 2])
console.log(total)


