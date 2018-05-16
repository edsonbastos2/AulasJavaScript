const area = function(area,altura){
    let valor = altura * altura
    if(valor > 20){
        console.log(`Valor fora do padrão ${valor}m2`)
    }else{
        return valor
    }
}

console.log(area(2,2))