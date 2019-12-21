console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
/*
* o this e o exports são duas referências ao module.exports
*/

module.exports.c = 3

exports = null
console.log(module.exports)

exports = {
    nome: 'Teste'
}

console.log(module.exports)

module.exports = { publico: true }