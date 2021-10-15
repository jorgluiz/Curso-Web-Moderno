// context class
// o this está disponível por toda a classe
class Alo {
    constructor() {
        this.hello = "Olá"
    }

    sayHello() { //método
        console.log(this.hello)
    }
}

const hello = new Alo()

hello.sayHello()