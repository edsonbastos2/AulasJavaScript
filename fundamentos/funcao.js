function imprimirSoma(a,b){
    console.log(a+b)
}
imprimirSoma(10,10)

function soma(a,b = 0) {
    return a+b
}

console.log(soma())
console.log(soma(5,5))

imprimirSoma()