const pessoa = {
    nome: 'Edson Bastos',
    idade: 32,
    logradouro: {
        rua: 'ABC',
        numero: 123
    }
}

const {nome,idade} = pessoa
const {logradouro: {rua, numero}} = pessoa

console.log(nome, idade)
console.log(rua, numero)