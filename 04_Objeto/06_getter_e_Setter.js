const sequencia = {
    _valor: 1, // convenção
    get valor() {return this._valor++},
    set valor(valor) {
        if(valor > this._valor){    //validação
            this._valor = valor

        }

    }

}

console.log(sequencia.valor, sequencia._valor)
sequencia._valor = 1000
console.log(sequencia.valor, sequencia._valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia._valor) 