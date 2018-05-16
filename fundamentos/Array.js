const valores = [7.8, 9.7, 4.6, 6.5]
const nomes = ['edson', 'lane', 'wanessa', 'igor', 'meiriane']
console.log(valores)
console.log(valores.length)
console.log(valores)
valores.push({id:3}, false, null, 'teste')
console.log(valores)
console.log(valores.pop())
delete valores[0]
console.log(valores)
console.log(typeof valores)
console.log('Array de nomes')
console.log(nomes)
console.log('Quantidade de indices no array = '+nomes.length)
nomes.push( {id:4}, 'true')
console.log(nomes)
console.log(nomes.pop())
console.log(nomes)
delete nomes[3]
console.log(nomes)
console.log(nomes[0], nomes[4])
console.log(nomes)