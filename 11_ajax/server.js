const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))  //vai servi o conteúdo static
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//app.get('/teste', (req, res) => res.send(new Date))  //vai servi p/página (data atual)
app.listen(8080, () => console.log('Executando...'))