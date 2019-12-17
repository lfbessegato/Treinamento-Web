{ 
    { 
        { 
            { 
                var sera = 'Será ????' 
                console.log(sera)
            } 
        } 
    } 
}

// A declaração var enxergar em qualquer parte do código
console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}

//Quando declarada em funções as variaveis são reconhecidas somente dentro da funcao
teste()
//console.log(local)