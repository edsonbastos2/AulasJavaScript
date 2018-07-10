const pessoa = {
    nome: 'Edson',
    sobreNome: 'Bastos',
    idade: 30,
    peso: 80,
}
//console.log(pessoa)
console.log(Object.keys(pessoa))
// console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}:${valor}`)
})

const o1 = { a:1 }
const o2 = { b:2 }
const o3 = { c:3, a:4}
const obj = Object.assign(o1, o2, o3)
console.log(obj)

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '27/11/1985'
})


Object.defineProperty(pessoa, 'funcao', {
    enumerable: true,
    writable: false,
    value: 'Técnico'
})
pessoa.dataNascimento = '21/12/1999'
pessoa.funcao = 'B.I'
console.log(pessoa)
