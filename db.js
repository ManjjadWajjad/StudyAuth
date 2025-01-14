require('dotenv').config()
const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sekolah'
})

const pollPromise = pollPromise()
//console.log(pollPimise)

module. exports= pollPromise