const fs = require('fs') // módulo File System

const caminho = __dirname + '/arquivo.json'

//Sincrono ...
// Se o arquivo for grande pode demorar, pois precisa ler o conteudo do arquivo para liberar o acesso.
console.log('MÉTODO SÍNCRONO')
const conteudo = fs.readFileSync(caminho, 'utf-8') // Encoding
console.log(conteudo)

// Assincrono ...
console.log ('Método ASSÌNCRONO')
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    //const config = conteudo // Gera erro pois é uma string
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//Ler JSON
console.log('LER DIRETO ARQUIVO JSON')
const config = require('./arquivo.json')
console.log(config.db)

//Ler Pastas
console.log('LEITURA DE PASTA')
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta ...')
    console.log(arquivos)
})