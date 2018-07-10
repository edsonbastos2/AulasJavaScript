// Object.preventExtensios

const produto = Object.preventExtensions({
    nome: 'qualquer', preco: 1.99, tag: 'promoção'
})

produto.nome = 'Borracha'
produto.descricao = 'Borracha escola branca'
delete produto.tag

console.log(produto)

// Object.seal

const pessoa = {
    nome: 'Juliana',
    idade: 35
}
Object.seal(pessoa)
pessoa.sobreNome = 'Silva'
pessoa.idade = 29
console.log(pessoa)
