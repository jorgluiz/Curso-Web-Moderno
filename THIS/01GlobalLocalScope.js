// Global scope
this.name = "Jorge"

function sayMyname(){
    //local scope
    console.log(this.name)// undefined
}

sayMyname()