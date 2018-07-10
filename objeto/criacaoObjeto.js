// usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)

const obj2 = new Object
console.log(obj2)

function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1  = new Produto('caneta', 7.99, 0.15)
const p2 = new Produto('notebook', 2998.99, 0.25)
console.log(p1.getPrecoDesconto(), p2.getPrecoDesconto())


function criaFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const func1 = new criaFuncionario('Edson', 7980, 4)
console.log(func1.getSalario())

const fromJson = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJson)
console.log(fromJson.info)