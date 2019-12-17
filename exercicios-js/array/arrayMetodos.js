const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // massa quebrou o carro! 
console.log(pilotos)
// pop -> remove o último elemento do array

pilotos.push('Verstappen')
console.log(pilotos)
//push -> adiciona um elemento no final no array

pilotos.shift()
console.log(pilotos)
// shift -> Remove o primeiro elemento do Array

pilotos.unshift('Hamilton')
console.log(pilotos)
//unshift -> Adiciona em primeiro no array

// splice pode adicionar e remover elementos

//Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)
// slice -> retorna uma novo array

const algunsPilotos2 = pilotos.slice(1, 4) // último elemento não entra
console.log(algunsPilotos2)