function run(fun){
    fun()
}

run(function () {console.log('Executando')})

function soma(a,b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(2,4)(3)