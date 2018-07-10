const notas = [7.8,8.9,5.4,4.3,3.2,9.7]

const  notasBaixa2 = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixa2.push(notas[i])
    }
}


const notasBaixa = notas.filter((nota)=> nota < 7)
console.log(notasBaixa)
console.log(notasBaixa2)