let isAtivo = false
console.log(isAtivo)
isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)
console.log(!!('' || null || 0 || ' '))

let nome = ''

console.log(nome || 'Desconhecido')
console.log(!!null)
console.log(!!3)
console.log(!!Number)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log('Os falsos......')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))
console.log('Pra finalizar...')
console.log(!!('' || null || 0 || ''))

let nome2 = ''

console.log( nome2 || 'Desconhecido' )
