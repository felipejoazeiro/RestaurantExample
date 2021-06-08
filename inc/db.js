const mysql = require('mysql2')


const connection = mysql.createConnection({
    host:'localhost',
    user: 'User',
    database: 'saboroso',
    password: 'password'
})

module.exports = connection