const express = require('express') //Importar o framework
const router = express.Router() //Modularizar as rotas

//Conectar ao Banco de Dados
const db = require('../db')

//Definir as rotas
//1ª rota = Cadastrar usuário
//Tipo: POST (REQUEST)
//Caminho: /api/users/
router.post('/', (req, res) => {
    //JSON
    const { nome, email } = req.body

    //Executar uma instrução SQL
    db.query('INSERT INTO users (nome, email) VALUES (?, ?)', [nome, email],
        //Verificação de erro
        (err, result) => {
            if (err) return res.status(500).send(err) //Código 500 = erro interno no lado do servidor
            res.status(201).json({ id: result.insertId, nome, email }) //Código 201 = sucesso
        }
    )
})

//Exportar as rotas
module.exports = router