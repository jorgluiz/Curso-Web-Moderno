const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }

//objeto p/JSON
console.log(JSON.stringify(obj))

console.log('\n *************************************************')

//JSON p/Objeto
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))

console.log('\n *************************************************')

console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": {}, "e": []}'))
