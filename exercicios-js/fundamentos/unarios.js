let num1 = 1
let num2 = 2

num1++ //pos fixada (acrescenta uma unidade ao valor da unidade)
console.log(num1)

--num1 //pré fixada (decrementa uma unidade ao valor da unidade)
console.log(num1)

// Pré fixada tem maior precedencia sobre a Pós fixada
console.log (++num1 === num2--)
console.log(num1 === num2)
