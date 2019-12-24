// não aceita repetição / não indexada
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

console.log('times: ', times)
console.log('Size: ', times.size)
console.log('has(vasco): ', times.has('vasco'))
console.log('has(Vasco): ', times.has('Vasco'))
times.delete('Flamengo')
console.log('has(Flamengo): ', times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log('Nomes Set: ', nomesSet)