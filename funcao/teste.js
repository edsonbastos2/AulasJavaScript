const songs = [
    {title: 'Gods Plan', artist: 'Darke'},
    {title: 'Rockstar', artist: 'Post Malone'},
]

for(let {title,artist} of songs){
    console.log(`${title} by ${artist}`)
}

const musicas = [
    {titulo: 'Teatro dos vampiros', artista: 'Renato Russo'},
    {titulo: 'Mulher de fases',  artista: 'Raimundos'}
]

for(let {titulo,artista} of musicas){
    console.log(`${titulo} by ${artista}`)
}

let x = [artista,musica] = ['raimundos','Mulher de fases']

console.log(`${artista} de ${musica}`)
//console.log(x)

x.forEach((a) =>{
    console.log(a)
})