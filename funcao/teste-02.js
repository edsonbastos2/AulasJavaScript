const cervejas = [
    {estilo: 'Pilsen', rotulo:'Heiniken'},
    {estilo: 'Trigo', rotulo:'BadenBaden'},
    {estilo: 'Preta',  rotulo: 'Devassa'}
]

for( let {rotulo,estilo} of cervejas){
    console.log(`${rotulo} by ${estilo}`)
}

const beer = ['Heiniken', 'BadenBaden', 'Hougarden']

beer.forEach((beer) => {
    console.log(beer)
})

