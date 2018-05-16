const escola = 'Cod3r'
let nome = 'EdsonBastos'
console.log(escola.charAt(4)) //Mostra a letra no indice 4 = r
console.log(escola.charAt(5))
console.log(escola.charCodeAt(4)) //Mostra o valor na tabela Asc ou Unicode
console.log(escola.indexOf('d'))
console.log(escola.substring(1))
console.log(escola.substring(0, 3)) // Mostra a letra deacordo com sua posição
console.log('Escola '.concat(escola).concat('!!'))
console.log('Seun Nome é '.concat(nome),'estudei '.concat(escola)) // Uma forma de concatenar
console.log(escola.replace(3, 'e')) // substitui o numero 3 pelo e
console.log('edson,bastos,almeida'.split(','))
console.log(escola, 'escola', nome)
console.log(escola+' Edson')
