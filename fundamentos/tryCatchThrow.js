function imprpimirNomeCRitado(obj){
    try{
        console.log(obj.name.toUpperCase()+ '!!!!')
    }catch(e){
        tratarerroElancar(e)
    }
}

function tratarerroElancar(erro){
    throw 'mensagem'
}

const obj = {nome:'Edson'}
imprpimirNomeCRitado(obj)