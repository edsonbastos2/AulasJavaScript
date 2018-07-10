const quaseArray = {0: 'Edson', 1: 'Bastos', 2: 'Almeida'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.value(this)}
})

console.log(quaseArray[0])