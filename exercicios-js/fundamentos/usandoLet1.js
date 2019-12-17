var numero = 1
{
    //o let tem escopo de bloco, portanto estará visivel somente dentro do bloco
    let numero = 2
    console.log('dentro =', numero)
}

console.log('fora =', numero)