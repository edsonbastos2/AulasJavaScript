for(var i = 0; i < 6; i++){
    function rand({min = 0, max = 60}){
        const valor = Math.random() * ( max -min) + min
        return Math.floor(valor)
    }
    console.log(rand({}))
}