const Express = require('express')
const cors = require('cors')
const bd =require('./data/sqlite-bd')
const imigranteController = require('./controllers/imigrante-controller')
const parceiroController = require('./controllers/parceiro-controller')
const port = process.env.PORT
const app = Express()


app.use(cors())
app.use(Express.json())

imigranteController(app, bd)
parceiroController(app, bd)

app.listen(process.env.PORT||port, ()=>console.log(`[INFO]Servidor rodando na porta: ${port}`))