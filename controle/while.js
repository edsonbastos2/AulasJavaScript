const getInteiro = (min, max) =>{
    let valor = Math.random() * (max -min) + min
    return Math.floor(valor)
}

let opcao = 0

    while (opcao != -1) {
        opcao = getInteiro(-1, 10)
        console.log(`Opção escolhida foi ${opcao}.`)
    }

    console.log('Até a proxima!')