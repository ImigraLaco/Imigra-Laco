const express = require('express')
//Configurações
const app = express()
const port = 3030

//Importando Rotas
const rotasImigrante = require('./controller/imigrante-controller')
const rotasParceiro = require('./controller/parceiro-controller')

//Importando Models no DB
const Imigrante = require('./models/ImigrModel')
const Parceiro = require('./models/ParcModel')
const db = require('./data/sqlite-db')

//Middlewares
app.use(express.json())

//Usando Rotas
rotasImigrante(app,db)
rotasParceiro(app,db)

module.exports = app