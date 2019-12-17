const alunos = [
    { nome: 'João', nota: 7.3, bolsita: false },
    { nome: 'Maria', nota: 9.2, bolsita: false },
    { nome: 'Pedro', nota: 9.8, bolsita: false },
    { nome: 'Ana', nota: 8.7, bolsita: true }
]

// Desafio 1: Todos os alunos são bolsitas?
const todosBolsitas = (resultado, bolsita) => resultado && bolsita
console.log('Todos Bolsitas: ', alunos.map(a => a.bolsita).reduce(todosBolsitas))

// Desafio 2: Algum aluno é bolsita?
const algumBolsita = (resultado, bolsita) => resultado || bolsita
console.log('Algum Bolsita: ', alunos.map(a => a.bolsita).reduce(algumBolsita))

