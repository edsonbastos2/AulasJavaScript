const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retorna um Array com apenas preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

console.log(carrinho.map(paraObjeto).map(apenasPreco))