const alunos = [
    { nome: 'João', nota: 7.3, bolsita: false },
    { nome: 'Maria', nota: 9.2, bolsita: false },
    { nome: 'Pedro', nota: 9.8, bolsita: false },
    { nome: 'Ana', nota: 8.7, bolsita: true }
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)