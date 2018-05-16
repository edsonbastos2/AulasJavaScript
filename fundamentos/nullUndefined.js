let valor
console.log(valor)

valor = null
console.log(valor)
// console.log(valor.toString())
const produto = {}
console.log(produto.preco)
console.log(produto)
produto.preco = null
console.log(produto)
console.log(!!produto.preco)

if (!!produto) {
    console.log('null')
}

