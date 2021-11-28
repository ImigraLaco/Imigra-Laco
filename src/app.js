const express = require('express')
//Configurações
const app = express()
const port = 3030

//Importando Rotas
const rotasImigrante = require('./controller/imigrante-controller')
const rotasParceiro = require('./controller/parceiro-controller')

//Importando Models no DB
const Imigrante = require('./models/ImigranteModel')
const Parceiro = require('./models/ParceiroModel')
const db = require('./data/sqlite-bd')

//Middlewares
app.use(express.json())

//Usando Rotas
rotasImigrante(app,db)
rotasParceiro(app,db)

module.exports = app