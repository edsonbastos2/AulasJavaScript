const notas = [7.7,6.5,5.2,8.9,3.6,7.1,9.9]

const notasBaixas1 = []

for(let i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

const notasBaixas2 = notas.filter( nota => nota < 7)

console.log(notasBaixas1)
console.log(notasBaixas2)
notas.forEach( (nota,indice) =>console.log(`${indice}.Nota = ${nota}`))