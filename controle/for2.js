let notas = [7.8,9.8,6.8,8.8]

for(i in notas){
    console.log(i,'=', notas[i])
}
console.log('======== for  =========')
for(let i=0; i<notas.length; i++){
    console.log(`${i} = ${notas[i]}`)
}
console.log('======== for in obj ===========')

let pessoa = {
    nome: 'edson',
    sobre: 'bastos',
    idade: 30,
    Email: 'exemplo@exemplo.com'
}

for(atrib in pessoa){
    console.log(`${atrib}: ${pessoa[atrib]}`)
}   

console.log('==================')

let clientes = {
    nomeCliente: 'Cliente-01',
    endereco: 'Rua do Bobo',
    cep: 6030235,
    tipo: true
}

for( dados in clientes){
    console.log(`${dados} = ${clientes[dados]}.`)
}

console.log('===============')

let notaAp2 = [7.8,8.9,7.9,5.6,4.5]
for(indice in notaAp2){
    console.log(`${indice} = ${notaAp2[indice]}`)
}