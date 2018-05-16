 let soma = function(x,y){
     return x+y
 }

 let imprimirRsultado = function (a,b, operacao = soma){
     console.log(operacao(a,b))
 }

 imprimirRsultado(3,4)
 imprimirRsultado(3,4, soma)
 imprimirRsultado(3,4, (x,y) =>{return x-y})
 imprimirRsultado(3,4, (x,y)=> x * y)
 imprimirRsultado(3,5, (x,y)=> x * y)

 const pessoa = {
     falar: () =>{console.log('Opa!')}
 }

 pessoa.falar()