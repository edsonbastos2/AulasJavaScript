function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco:4589,
    desc: 0.15,
    getPreco
}
console.log(produto.nome)
console.log(produto.getPreco())
console.log(getPreco.call(produto, 0.20, '$'))
console.log(getPreco.apply(produto,[0.1, '$']))

console.log('==================')
const carro = { nome: 'Ferrari', preco: 49990, desc:  0.20}
console.log(carro.nome)
console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.17, '$']))