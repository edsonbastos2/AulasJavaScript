const pai = { nome: 'Pedro', corCabelo: 'preto'}

const filho01 = Object.create(pai)
filho01.nome = 'Edson'
console.log(filho01)

const filho2 = Object.create(pai, {
    nome: {enumerable: true,writable: false,value: 'Bia'}
})

console.log(filho2.corCabelo)