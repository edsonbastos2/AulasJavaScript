const criarProduto = (nome, preco) =>{
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notbook', 2890.98))
console.log(criarProduto('Iphone-7', 2.500))
   
