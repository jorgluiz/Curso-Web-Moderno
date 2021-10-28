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

//app.get('/teste', (req, res) => res.send(new Date))  //vai servi p/página (data atual)
app.listen(8080, () => console.log('Executando...'))