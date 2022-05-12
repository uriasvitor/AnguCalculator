const express = require('express')
const app = express()
var cors = require('cors')
 
app.use(cors())

app.use(express.json())

const routerCalculadora = require('./routes/calculadora')

app.use("/calcular", routerCalculadora)


app.listen(8080)