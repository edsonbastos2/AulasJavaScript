const a = 7
let b = 3

b += a // b = b + a
console.log(b)

let calcular = function(num){
    let result = num %= 2
    if(result == 0){
        console.log('numero par')
    }else{
        console.log('numero impar')
    }
}

calcular(5)

b -= a // b = b - a
console.log(b)

b *= a // b = b * a
console.log(b)
b /= a // b = b / a
console.log(b)
b %= a // b = b % a
console.log(b)