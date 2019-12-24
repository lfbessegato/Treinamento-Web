// Operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

// user spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }
console.log('Funcionario: ', funcionario)
console.log('Clone: ', clone)

// Usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoB = ['Maria', ...grupoA, 'Rafaela']
console.log('Grupo A: ', grupoA)
console.log('Grupo B: ', grupoB)