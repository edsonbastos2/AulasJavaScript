function Carro(velocidadeMaxima = 200, delta = 5){
    let velocidadeAtual = 0


    this.acelerar = function(){
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

let uno = new Carro
let Ferrari = new Carro(300, 20)
uno.acelerar()
Ferrari.acelerar()
console.log(uno.getVelocidadeAtual())
console.log(Ferrari.getVelocidadeAtual())
console.log(typeof Carro)
console.log(typeof Ferrari)