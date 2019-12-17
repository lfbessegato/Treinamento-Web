/* ternario -> composto por três partes 
* expressão que contém o ?, 
* verdade a primeira validação
* falso para a segunda validação */
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))