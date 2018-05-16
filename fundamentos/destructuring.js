const pessoa = {
    nome: 'Ana',
    idade: 4,
    sexo: 'Femenino',
    escolaridade: 'ensino-médio',
    endereco: {lougradoro: 'Rua abc', numero:900},
}

const { nome, idade} = pessoa
console.log(nome, idade)

const {sexo, escolaridade} =pessoa
console.log(sexo, escolaridade)

const { endereco: { lougradoro, numero, cep = 0}} = pessoa
console.log(lougradoro, numero, cep)