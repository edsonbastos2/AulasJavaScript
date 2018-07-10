function criarProduto(nome,preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('notebook', 2400.48))
console.log(criarProduto('Iphone', 2600.89))