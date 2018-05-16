const contagem = (min, max) =>{
    let valor = Math.random() * (max- min) + min
    return Math.floor(valor)
}

let opcao = 0
    while (opcao != -1) {
        opcao = contagem(-1,10)
       console.log(`Opção escolhida ${opcao}`)
    } 
