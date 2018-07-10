const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}
console.log(Object.keys(pessoa)) // recupera as as chaves de um array
console.log(Object.values(pessoa)) // recupera os valores de uma array
console.log(Object.entries(pessoa)) // trasforma um objeto em array
Object.entries(pessoa).forEach(([chave, valor]) =>{ // percorre os array
    console.log(`${chave}:${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', { // define atributos especificos de um objeto
    enumerable: true,
    writable: false,
    value: '27/11/1985'
})

pessoa.dataNascimento = '23/11/1999'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Objet.assign ( ECMAScript 2015) concatena varios objetos em um só, sendo que valores iguais sobrescrevem os primeiros

const dest = { a:1}
const o1 = { b: 2}
const o2 = { c: 3, a: 4}

const obj = Object.assign(dest, o1, o2)
Object.freeze(obj)
obj.c = 6
console.log(obj)