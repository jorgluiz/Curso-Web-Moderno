// This na arrow function (context function inside function)
// pega this do scope anterior (contexto)

this.name = "Valesca"

const age = age => {

    this.name = "Kyam"
    const birthYear = age => {
        const year = 2021 - age
        console.log(this.name, year)
    }
    birthYear(age)
}


// const dev1 = {
//     sayMyName: function(){
//         console.log(this.name) //This.name fica encapsulado
//     }
// }

// dev1.sayMyName() //return undefined
// //---------------------------------------------------------
// const dev2 = {
//     sayMyName: () => {
//         console.log(this.name) //This.name Global
//     }
// }
// dev2.sayMyName() //return scope Global
//---------------------------------------------------------
const dev3 = {
    sayMyName: () => {
        this.name = "Enzo"
    }
}
dev3.sayMyName()

console.log(this.name) // Substituiu o scope GLOBAL this.name = "Valesca" // por -> this.name = "Enzo"




// age(31)

// console.log(this.name) // return Kyam