const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40', 
    velMax: 200
}

console.log(ferrari.prototype) // Objeto não tem o prototype, somente a função tem o prototype
console.log(ferrari.__proto__) // Retorna o prototype do Objeto (função) Pai
console.log(ferrari.__proto__ === Object.prototype) // True

console.log(volvo.__proto__ === Object.prototype) // True
console.log(Object.prototype.__proto__ === null) // null -> não tem um prototype acima

// Object -> É uma função

function MeuObjeto(){}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)
