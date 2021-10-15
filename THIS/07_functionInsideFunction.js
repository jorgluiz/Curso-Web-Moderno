// context function inside function (context function inside function)
// não pega this Global
this.name = "Valesca"

function age(age){
    this.name = "Mikon" //scope local //return Mikon

    function birthYear(age){
        this.name = "Michael" //scope local //return Michael
        const year = 2021 - age
        console.log(this.name, year)
    }
    birthYear(age)

    console.log(this.name)
}

age(31)

console.log(this.name) // scope Global // return Valesca