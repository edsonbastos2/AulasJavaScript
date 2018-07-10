let aprovados = ['edson', 'lane', 'wanessa']
aprovados[3] = 'Jose'
aprovados.push('Bia')
aprovados[9] = 'Carlos'
// aprovados.forEach((nome, indice)=>{
//     console.log(`${indice}.${nome}`)
// })

//aprovados.sort() // Reordena as posições do Array
console.log(aprovados)
aprovados.splice(1,0, 'elemento1', 'elemento2')
console.log(aprovados)



