class Pessoa{
    constructor(nome){
        this.nome = nome
    }

   falar(){
        console.log(`Meu nome é ${this.nome}`)
   }
}

const pessoa1 = new Pessoa('Edson')

pessoa1.falar()
