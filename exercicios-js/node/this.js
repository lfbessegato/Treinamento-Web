console.log(this === global) // false -> this apontada para módulo e não para global
console.log(this === module) // false -> this é objeto que é referência de módulo

console.log(this === module.exports) // true
console.log(this === exports) // true -> this aponta para mesma referência de exports

function logThis(){
    console.log('Dentro de uma função ...')
    console.log(this === exports) //false -> dentro de uma função this não aponta para a mesma referência 
                                        // de exports.

    console.log(this === module.exports) // false -> igual a explicação anterior.
    console.log(this === global) // true -> this dentro de uma função aponta para global.
}

logThis()