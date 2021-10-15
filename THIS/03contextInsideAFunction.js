//context Inside a method 
// não pega o This Global, somente o objeto

this.name = "João"

const dev = {
    name: "Cleiton",
    sayMyname: function(){
        console.log(this.name) //Cleiton
    }
}

dev.sayMyname()