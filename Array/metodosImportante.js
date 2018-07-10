const pilotos = ['Vettel',  'Alonso', 'Raikkoner',  'Massa']
const carros = ['Ferrari', 'Porsh', 'Volvo', 'Camaro', '']

pilotos.pop() // remove o ultimo elemento do array
console.log(pilotos)
pilotos.push('Verstappen')
console.log(pilotos)
pilotos.shift() // remove o primeiro
console.log(pilotos)
pilotos.unshift('Hamilton') // adiciona na primeira posição
console.log(pilotos)
pilotos.splice(2, 0, 'Bottas', 'Massa') // adiciona ou remove dados no array
console.log(pilotos)
pilotos.splice(3,1)
console.log(pilotos)

const algunsPilotos2 = pilotos.slice(2)
console.log(algunsPilotos2)

const algunsCarro = carros.slice(2) // novo array 
carros.unshift('Fusca')
console.log(algunsCarro)
console.log(carros)