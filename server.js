const express = require('express')
const app = express()
const port = 3000

//definir caminho
const path = require('path')

//Informar onde os arquivos estáticos estão
app.use(express.static('public'))

//Rota
const db = require('./db') // conectar ao Banco de Dados

app.get('/', (req, res) =>{
    //res.send('Front funcionando')
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

//Linkar com o arquivo API (contém as rotas do nosso sistema)
const apiRoutes = require('./routes/api')

//Informar para o server.js (receber arquivos no formato JSON)
app.use(express.json())

//Informar a rota que está presente no api.js
app.use('/api/users', apiRoutes)

app.listen(port, () =>{console.log("Servidor funcionando")})

