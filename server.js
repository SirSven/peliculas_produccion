const express = require('express')
const app = express()
const mongoose = require('mongoose')
const rutasPeliculas = require('./routes/peliculas')
require('dotenv').config()

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.collection('peliculas')
db.once('open', () => console.log('Conexion establecida con la base de datos'))

app.use(express.json())
app.use('/peliculas', rutasPeliculas)

app.listen(3000, () => console.log('Servidor funcionando'))