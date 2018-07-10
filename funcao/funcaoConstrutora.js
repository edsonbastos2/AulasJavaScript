function Carro(velocidadeMaxima = 200, delta = 5){
    // Atributo Privado
    let velocidadeAtual = 0
    
    // Metodos Publicos
    this.acelera = function(){
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

const uno = new Carro
uno.acelera()
uno.acelera()
console.log(uno.getVelocidadeAtual())

const Ferrari = new Carro(350,20)
Ferrari.acelera()
Ferrari.acelera()
Ferrari.acelera()
Ferrari.velocidadeAtual = 350
console.log(Ferrari.getVelocidadeAtual())
console.log(Ferrari.velocidadeAtual)
console.log(typeof Carro)
console.log(typeof Ferrari)