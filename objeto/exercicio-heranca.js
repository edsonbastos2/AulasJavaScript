function Carro(){
    modelo: 'Popular'
    motor: 1.0
}

Object.create(Carro, {cor:{enumerable: true, writable: true, value: 'Preto'}})
console.log(Carro.prototype)

const carro01 = new Carro
const carro02 = new Carro

console.log(Carro.prototype === carro01.__proto__)
carro01.modelo = 'Fiat'
carro01.motor = 2.0
carro01.cor = 'vermelho'
console.log(carro01)
// console.log(carro01.__proto__ === carro02.__proto__)