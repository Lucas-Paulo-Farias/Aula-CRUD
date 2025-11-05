const mysql = require('mysql2')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'c@tolic@',
    database: 'progweb',
    port: '3306'
})

db.connect(err =>{
    if (err) throw err
    console.log("Conectdo ao bando de dados")
})

module.exports = db