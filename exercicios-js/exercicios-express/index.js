const express = require('express')
const app = express()
const bodyParser = require('body-parser')

/* Exemplo de chamada com o Body Parser */
// Interpretar qualquer texto que chegue na requisição
app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extend: true }))
const saudacao = require('./saudacaoMid')

const usuarioApi = require('./api/usuario')
const produtoApi = require('./api/produto')
produtoApi(app, 'com param!')

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

/* funcção middleware -> recebe requisição, resposta, e next() 
é importante definir a sequencia das chamadas das funções
*/

// a funcao saudacao é função middleware
app.use(saudacao('Luciano'))

// middleware
app.use((req, res, next) => {
    console.log('Antes ...')
    next()
})

/* Ler dados de uma requisição 
A ordem das requisições são importantes
A requisição GET -> passa na URL da requisição
A requisição POST -> passa no body da requisição
*/
app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    /* let corpo = ''
    req.on('data', function(parte) {
        corpo += parte
    })

    req.on('end', function() {
        //res.json(JSON.parse(corpo))
        res.send(corpo)
     })
    */
   // Envio pelo bodyParser
   res.send(req.body)
})

app.get ('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})



/* 
O método use -> acessa tanto get quanto post do http
o método all -> acesso todos métodos do http(post, get, put, ...)
*/

// middleware
app.get('/teste',(req, res, next) => {
    console.log ('Durante ...')
    res.json({
        data: [
            {id: 7, name: 'Ana', position: 1},
            {id: 34, name: 'Bia', position: 2},
            {id: 73, name: 'Carlos', position: 3}
        ], 
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })
    /* Pode trabalhar em receber um json
    res.json({
        name: 'Ipad 32GB',
        price: 1899.90,
        discount: 0.12
    })
    */

    //res.send('Estou Bem! - <b>Use</b> ')
    next()
})

// middleware
app.use((req, res) => {
    console.log('Depois ...')
})

/*
app.get('/teste2',(req, res) => {
    res.send('Estou bem novamente - <b>Get</b>')
})

app.post('/teste3',(req, res) =>{
    res.send('Estou melhor! <b>Post</b> ')
})
*/


app.listen(3000, () => {
    console.log('Backend executando ...')
})