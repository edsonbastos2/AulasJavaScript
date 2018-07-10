Object.prototype.attr0 = 'z'
const avo = { attr1: 'A'}
const pai = {__proto__:avo, attr2: 'B',  attr3: '3'}
const filho = {__proto__:pai, attr3: 'C'}

console.log(filho.attr1, filho.attr1, filho.attr2, filho.attr3)

const Carro = {
    velAtual: 0,
    velMax:200,
    aceleraMais(delta){
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },

    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`

    }
}


const ferrari = {
    modelo: 'F40',
    topSpeed: 320,
    RPM: 8.250,
    colour: 'red',
    
}

const volvo = {
    modelo: 'V40',
    topSpeed: 240,
    RPM: 8.250,
    colour: 'Black',
    status(){
        return `${this.modelo} : ${super.status()}`
    }
}

const porsche = {
    modelo: 'GT3 Rs',
    topSpeed: 320,
    RPM: 8.250,
    colour: 'red'
}

Object.setPrototypeOf(ferrari, Carro) // Para define a relação de prototipo
Object.setPrototypeOf(volvo, Carro)
Object.setPrototypeOf(porsche, Carro)

console.log(ferrari)
console.log(volvo)
console.log(porsche)

volvo.aceleraMais(100)
porsche.aceleraMais(320)
console.log(volvo.status())
console.log(porsche.status())

