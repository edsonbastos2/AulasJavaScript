const soma = function(x,y){
    return x+y
}

const imprimirValor = function(a,b,operacao = soma){
    console.log(operacao(a,b))
}

imprimirValor(3,7, (x,y)=>{
    return x * y
})

imprimirValor(3,4)

const Pessoa = {
    fala: ()=>console.log('Opa!')
}

Pessoa.fala()