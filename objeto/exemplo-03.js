function criarFuncionario(nome, salarioBAse, faltas){
    return{
        nome,
        salarioBAse,
        faltas,
        getSalario(){
            return (salarioBAse / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

const filha = Object.create(null)
filha.nome = 'Ana'
filha.idade = 12
console.log(filha)