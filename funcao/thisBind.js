const pessoa= {
    saudacao: 'Bom dia !',
    nome: 'Edson',
    sobreNome: 'Bastos',
    falar(){
        console.log(this.saudacao, this.nome, this.sobreNome)
    }
}

pessoa.falar()

let falar = pessoa.falar
falar()
let pessoaFalar = pessoa.falar.bind(pessoa)
pessoaFalar()