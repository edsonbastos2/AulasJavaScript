function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const curso01 = new Aula('Bem vindo', 123)
const curso02 = new Aula('Até breve', 456)

console.log(curso01)
console.log(curso02)