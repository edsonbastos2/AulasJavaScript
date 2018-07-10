class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

let p1 = new Pessoa('Edson')
p1.falar()

// Função construtora
const criarPessoa = nome =>{
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

let p2 =  criarPessoa('Bastos')
p2.falar()