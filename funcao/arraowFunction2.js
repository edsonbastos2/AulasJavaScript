function pessoa(){
    this.idade = 0
    this.nome = 'Edson'

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new pessoa