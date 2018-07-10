Array.prototype.map2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }

    return newArray
}

const pessoas = [
    '{"nome": "Edson", "idade": 30, "peso": 80, "altura": 1.70}',
    '{"nome": "Lane", "idade": 28, "peso": 70, "altura": 1.70}',
    '{"nome": "Jose", "idade": 40, "peso": 80, "altura": 1.66}',
]

const paraObjeto = json => JSON.parse(json)
const apenasAtributo = indice => indice.nome

const resultado = pessoas.map2(paraObjeto).map2(apenasAtributo)
console.log(resultado)
