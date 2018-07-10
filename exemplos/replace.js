let texto = 'Estudando JavaScript, JavaSCRIPT é uma linguagem dinamica'
let resultado = texto.replace(/JavaScript/gi, '')
console.log(resultado)

let nomes = ['edson','bastos','lane']
nomes.forEach((nome) =>{ 
    nome.replace(/[\\"]/gi, '')
    console.log(`${nome.split(',')}`)
})
