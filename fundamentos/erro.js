function tratarErroElancar(erro) {
    //throw new Error('Mensagem de erro')
    //throw 10
    // throw true
    throw 'Erro econtrado pelo suporte ' + new Date
}

function imprimirNomeGritando(obj){
    try {
        console.log(obj.name.toUpperCase() + '!!!!')
    } catch (error) {
        tratarErroElancar(error)
    }finally{
        console.log('Concluido')
    }
}

const obj = { name: 'Edson'}

imprimirNomeGritando(obj)