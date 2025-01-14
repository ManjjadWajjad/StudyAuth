const express = require('express')
const cors = require('cors')
require('dotenv').config('cors')
const router= require('../routes/user-router')
const { route } = require('./router/user-router')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api',router)

const port =process.env.port

app,listen{port (){
    console.log(`erver Run http://localhost;$(port)/api/siswa`)
}}