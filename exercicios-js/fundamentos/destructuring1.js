// novo recurso do ES2015

const pessoa = {
    nome: 'Ana', 
    idade: 5, 
    endereco: {
        logradouro: 'Rua: ABC',
        numero: 1000
    }
}

//destructuring, extraindo de um objeto
const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

//Tomar cuidado qdo for desalinha uma dado que não existe
/*const { conta: { ag, num} } = pessoa
console.log(ag, num)
*/