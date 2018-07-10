const ferrari = { 
    modele: 'F40',
    velMaxi: 230
}

const volvo = { 
    modelo: 'V40',
    velMaxima: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)

function meuObject(){}
console.log(typeof Object, typeof meuObject)
console.log(Object.prototype, meuObject.prototype)
