const obj = { a:1, b:2, c:3, soma(){a+b+c}}
console.log(JSON.stringify(obj))  // Transformando em um Json
const obj2 = '{ "a":1, "b":2, "c":3}'
console.log(JSON.parse(obj2)) // Tranformando em é objeto