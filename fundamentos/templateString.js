let nome = 'Edson'
let idade = 32
let concatenacao = 'Nome = '+nome+'!'
console.log(concatenacao)

let template = `nome = ${nome} !
idade = ${idade}`
console.log(template)

const up = texto => texto.toUpperCase()
console.log(`epa...${up('cuidado')}`)
console.log(`1 + 1 = ${1 + 1}`)