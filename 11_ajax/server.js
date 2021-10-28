const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))  //vai servi o conteúdo static
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


////////////////////////////////////////////////////////////////////////////////////////////////////////

// interpretando o arquivo 'upload' (BackEnd)
const multer = require('multer') // import 'multer'

const storage = multer.diskStorage({ //config parte de armazenamento
    destination: function (req, file, callback) {
        callback(null, './upload')//pasta de destino
    },
    filename: function (req, file, callback) { //nome do arquivo que será enviado para pasta './upload'
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => { //requisição tipo post
    upload(req, res, err => {
        if (err){
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso.')
    })
})
////////////////////////////////////////////////////////////////////////////////////////////////////////

// fetch2
app.post('/formulario', (req, res) => { //tratar requisição do type post
    res.send({
        ...req.body,   //devolvendo resposta para o FrontEnd
        id: 1
    })
})

////////////////////////////////////////////////////////////////////////////////////////////////////////

// axios2
app.get('/parOuImpar', (req, res) => {
    // req.body
    // req.query
    // req.params
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

////////////////////////////////////////////////////////////////////////////////////////////////////////

//app.get('/teste', (req, res) => res.send(new Date))  //vai servi p/página (data atual)
app.listen(8080, () => console.log('Executando...'))