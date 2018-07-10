function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(`O valor da Caneta ${p1.getPrecoDesconto()} e do Notebook ${p2.getPrecoDesconto()}`)