const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()

console.log('contador A: ', contadorA.valorj, 'Contador B: ', contadorB.valor)

contadorC.inc()
contadorC.inc()

console.log('Contador C: ', contadorC.valor, 'Contador D: ', contadorD.valor)