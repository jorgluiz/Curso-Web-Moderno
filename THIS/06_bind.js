// bind ( ligar )
// retorna a função chamada, porém ligada ao contexto que lhe foi passado.
// baund function

this.name = "Jorge"

function sayMyName(age){
    this.age = age
    console.log(this.name, this.age)
}

const dev = {
    name: "Isabela", 
    age: 35,
    sayMyAge: function(){
        console.log(this.name, this.age)
    }
}

// dev.sayMyAge()
                                    //or ligar nesse contexto
const age = dev.sayMyAge.bind(dev) //.bind(this)
age()


/*const baundSayMyName = */ sayMyName.bind(this)(30) // IIFE (Immediately Invoked Function Expression) é uma função em JS que é executada assim que definida.
//baundSayMyName(30)

const baundSayMyNameDev = sayMyName.bind(dev)
baundSayMyNameDev(19)
