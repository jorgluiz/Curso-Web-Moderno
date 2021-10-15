//context inside a function
// não pega o This Global // Mas no Browser o This é Global,
//nesse contexto
this.name = "Enzo"

function sayMyname(){
    console.log(this.name) //undefined
}

sayMyname()
//-----------------------------------------------------------
//Browser
this.name = "Enzo"

function sayMyname(){
    console.log(this.name) //Enzo
}

sayMyname()