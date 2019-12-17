function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

//Exemplo da função call e apply
const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// Call -> o primeiro parâmetro é o contexto, e depois vem os parâmetros da função 
console.log(getPreco.call(carro, 0.17, '$'))

//Apply -> O primeiro parâmetro é o contexto, e depois em array vem os parâmetros da função
console.log(getPreco.apply(global, [0.17, '$']))