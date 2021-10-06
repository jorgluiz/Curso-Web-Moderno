function Pessoa(){
    this.idade = 0
     
    const self = this
    // Essa função dispara outra função a partir de determinado intervalo
    setInterval(function() {     //Passando uma função como parâmetro para outra função
       /*this*/self.idade++
       console.log(self.idade)

    }/*.bind(this)*/, 1000)   //intervalo. mil (1000) milissegundos representa um segundo
}

// instanciar a partir da função pessoa, para criar um objeto.  
new Pessoa