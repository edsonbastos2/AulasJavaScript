class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo{
    constructor(sobrenome, profissao = 'professor'){
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(profissao = 'Programador'){
        super('Bastos')

    }
}

let filho = new Filho
filho.profissao = 'Programador'
console.log(filho)