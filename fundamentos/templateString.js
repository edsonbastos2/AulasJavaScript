const nome = 'Edson'
const msg = 'ola ' + nome + '!'
const template = `${msg}
     bom dia 
        ${nome}`
console.log(template)
console.log(`2 + 2 = ${2+2}`)
const up = texto => texto.toUpperCase()
const calcular = (num1, num2) => num1 + num2 
console.log(`Ei.... ${up('cuidado')}`)
console.log(`Calculando...${calcular(5,5)}`)