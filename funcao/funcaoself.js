function pessoa(){
    this.idade = 0
    this.nome = 'edson'
    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/,1000)  
}

new pessoa


 