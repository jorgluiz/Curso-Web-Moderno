//This global
this.name = "Valeska"

function sayMyName(){
    console.log(this.name)
}

//contexto de método ele não pega Global (this)
const user = {
    name: "Diego",
    sayMyName: function(){ 
       console.log(this.name)
    }
}

user.sayMyName()

console.log(window.name)