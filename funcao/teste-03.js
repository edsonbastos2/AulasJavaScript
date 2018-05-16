const motos = ['Honda', 'Yamaha', 'Susuki', 'Ninja']

function lista(nome,indice){
    console.log(`${indice + 1}.${nome}`)
}

motos.forEach(lista)