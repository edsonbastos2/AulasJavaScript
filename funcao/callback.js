const fabricantes = ['Mercedes', 'Audi', 'BMW']
const funcionarios = ['Mario', 'Carlos', 'Maria', 'Fatima']
const Motos = [
    {motor: 150, modelo: 'Broz'},
    {motor: 300, modelo: 'CBR'},
    {motor: 230, modelo: 'CRF'}
]

const pessoas = {
    nome: 'Edson',
    idade: 32,
    sexo: 'masculino'
}
fabricantes.forEach((nome, indice) =>{console.log(`${indice + 1}.${nome}`)})
console.log('=============================================================')
funcionarios.forEach((x,y) => console.log(`${y + 1}.${x}`))
console.log('=============================================================')
for(let {motor, modelo} of Motos){
    console.log(`${modelo} Cilindrada ${motor}`)
}

Motos.forEach( (a)=>console.log(a))

