const pessoa = { nome: 'Edson'}
console.log(pessoa)
pessoa.nome = 'Edson Bastos'
console.log(pessoa)

//pessoa = { nome: 'Lane'}
//Object.freeze(pessoa) // congela o objeto, não será mais possivel fazer alterações
Object.defineProperty(pessoa, 'sobreNome', {
    enumerable: true,
    writable: true,
    value: 'Bastos'
})
console.log(pessoa)