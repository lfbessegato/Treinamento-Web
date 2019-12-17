// Object.preventExtensions
/*
* preventExtensions -> Não deixe adicionar novos atributos, mas permite alterar o conteúdo dos 
* atributos existentes e também pode apagar o atributo.
*/
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borrache escolar branca'
delete produto.tag
console.log(produto)

// Object.seal
/* 
* seal -> Selar -> Não deixa adicionar ou deletar os atributos, mas permite 
* alterar o conteúdo de um atributo existente
*/
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze -> selado + valores constantes