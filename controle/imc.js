const imc = (peso, altura) =>{
    let imc = peso / (altura*=altura)
    
    if (imc < 18.5) {
        console.log('Você está abaixo do recomendado IMC = ', imc.toFixed(2))
    }else if(imc >= 18.5 && imc < 24.9){
        console.log('Você está com o seu peso ideal IMC = ', imc.toFixed(2))
    }else if(imc >= 25 && imc < 29.9){
        console.log('Você está com sobre peso IMC = ', imc.toFixed(2))
    }else if(imc >= 30 && imc < 39.9){
        console.log('Você está com obesidade IMC = ', imc.toFixed(2))
    }else if(imc > 40){
        console.log('Você está com obsidade grave IMC = ', imc.toFixed(2))
    }
    return imc
}
imc(60, 1.72)
