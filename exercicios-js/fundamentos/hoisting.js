//hoisting -> içamento jogando para cima
function teste(){
    console.log('------ FUNÇÃO --------')
    console.log('a =', a)
    var a = 2
    console.log('a =', 2)
}
console.log('a =', a)
var a = 2
console.log('a =', a)

//O hoisting com let não ocorre
/* 
console.log('b =', b)
let b = 4
console.log('b =', b)
*/ 

teste()