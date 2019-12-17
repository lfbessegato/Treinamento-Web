// pessoa -> endereço mem. 123 -> {...}
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro' // O endereço de memória é o mesmo, o que mudou é o dado armazenado.
console.log(pessoa)

//pessoa -> 456 -> {...}
/* 
* Vai gerar erro pois está criando o mesmo objeto em outro endereço 
* de memória, e const não muda o endereço de memória.
pessoa = { nome: 'Ana'} 
*/ 

// freeze -> congela a modificação ao objeto
Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.endereco = 'Rua ABC'
delete pessoa.nome 
console.log(pessoa.nome)
console.log(pessoa)

//Objeto já inicia congelado 
const pessoaContante = Object.freeze({ nome: 'José'})
console.log(pessoaContante)