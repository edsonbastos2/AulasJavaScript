const [a, b, c, d] = [1, 2, 3, 4]
const data = new Date(0)
console.log(data.getTime())
console.log('01)', '1' == a)
console.log('02)', '1' === a)
console.log('03)', '3' != c)
console.log('04)', '3' !== c)

console.log('05)', c < b)
console.log('06)', c > b)
console.log('07)', a <= d)
console.log('08', d <= b)
console.log(data)
