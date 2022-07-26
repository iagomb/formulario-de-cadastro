const express = require('express');
const Usuario = require('./models/Usuario');
const bodyParser = require('body-parser');

// const Usuario = require('./db')
const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/sucess', (req, res) => {
    Usuario.create({
            nome: req.body.name,
            email: req.body.email,
            telefone: req.body.telefone,
            sexo: req.body.genero,
            data: req.body.data_nascimento,
            cidade: req.body.cidade,
            estado: req.body.endereco,
            endereco: req.body.endereco
    }).then(() => {
        res.send('Cadastro efetuado com sucesso')
    }).catch((err) => {
        res.send('Error ao se cadastrar', err)
    });
})

app.listen(3000)





