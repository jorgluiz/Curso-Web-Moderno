const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true}))
             //or
//app.use(express.urlencoded({ extended: true}))

app.post('/usuarios' , (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns. Incluido</h1>')
})

app.post('/usuarios/:id' , (req, resp) => {
    console.log(req.params.body)
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário Alterado</h1>')
})


app.listen(3003)