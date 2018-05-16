let notas = [7.5,4.5,5.5,8.7,9.6,2.1,6.4,7.6]
// Sem callback
let notasBaixa =[]
let notasAltas = []

for(let i in notas){
    if(notas[i] > 7){
        notasBaixa.push(notas[i])
    }else{
        notasAltas.push(notas[i])
    }
}
// Com callback
const notasBaixa2 = notas.filter(nota => nota < 7)
const notasAltas3 = notas.filter(function(nota){return nota > 7})
console.log('sem calback ',notasBaixa)
console.log('com calback usando arrow notas baixa', notasBaixa2)
console.log('com calback sem arrow', notasAltas3)