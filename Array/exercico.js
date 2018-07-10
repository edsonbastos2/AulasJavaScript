const funcionario = [
    {nome: "José", idade: 45, funcao: "porteiro", ativo: true},
    {nome: "Maria", idade: 32, funcao: "zelador", ativo: true},
    {nome: "claudio", idade: 23, funcao: "porteiro", ativo: true},
    {nome: "cecilia", idade: 30, funcao: "zelaador", ativo: true},
]

// const porfuncao = ( resultado, funcao) => resultado && funcao
// console.log(funcionario.map(a => a.funcao).reduce(porFuncao))

// const porAtivo = (resultado, ativo) => resultado || ativo
// console.log(funcionario.map(a => a.ativo).reduce(porAtivo))

const porIdade = func => func.idade >= 30 
const porAtivo = func => func.ativo
const porFuncao = func => func.funcao === "porteiro"

console.log(funcionario.filter(porIdade).filter(porAtivo).filter(porFuncao))


