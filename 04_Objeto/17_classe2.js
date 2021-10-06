class Avo {
    constructor(sobreNome, cabeloPreto,peleBranca){
        this.sobreNome = sobreNome
        this.cabeloPreto = cabeloPreto
        this.peleBranca = peleBranca 
    }
}

class Pai extends Avo {
    constructor(sobreNome, profissao = 'Professor'){
        super(sobreNome)
        this.profissao = profissao
    }
       
}

class Filho extends Pai {
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)
