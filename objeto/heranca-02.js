const avo = { attr1: 'A' }
const pai = { __proto__:avo, attr2: 'B'}
const filho = { __proto__:pai, attr3:'C'}

console.log(filho.attr1, filho.attr2)

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta){

        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },

    status(){
       return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    nome: 'Ferrari',
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    nome: 'Volvo',
    modelo: 'V40',
    status(){
        return `${this.nome} - ${this.modelo}: ${super.status()}`
    }
}

const polshe = {
    nome: 'Polshe',
    modelo: 'P600',
    velMax: 340,
    status(){
        return `${this.nome} - ${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)
Object.setPrototypeOf(polshe, carro)

console.log(ferrari)
console.log(volvo)

polshe.aceleraMais(300)
volvo.aceleraMais(300)
ferrari.aceleraMais(300)
console.log(volvo.status())
console.log(ferrari.status())
console.log(polshe.status())