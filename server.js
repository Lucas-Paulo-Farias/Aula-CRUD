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

app.listen(port, () =>{console.log("Servidor funcionando")})

