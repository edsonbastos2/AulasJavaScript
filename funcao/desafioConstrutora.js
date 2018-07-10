function Pessoa(nome){
    this.nome = nome
    this.falar = ()=>{console.log(`Meu nome é ${this.nome}`)}
} 

const p1 = new Pessoa('Edson')
p1.falar()

function Produtos(nome,preco){
    this.nome = nome
    this.preco = preco
    this.desconto = this.preco * 0.1
}

let pr4 = new Produtos('notebook', 2000)
console.log(pr4)
console.log(pr4.desconto)


