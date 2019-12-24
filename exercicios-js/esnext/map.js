const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

//console.log(tecnologias.react) -> forma errada de chamar
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log('has(123): ', chavesVariadas.has(123)) // has -> se está presente
chavesVariadas.delete(123)
console.log('has(123): ', chavesVariadas.has(123))
console.log('Size: ', chavesVariadas.size)