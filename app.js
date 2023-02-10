const express = require('express');

const app = express();

app.listen(5000);

app.set('view engine', 'ejs');

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('index')
});

app.get('/proceso', (req, res) => {
    res.render('proceso')
});

app.get('/cursos/estres', (req, res) =>{
    res.render('cursos/estres')
});

app.get('/cursos/liderazgo', (req, res) =>{
    res.render('cursos/liderazgo')
});

app.get('/cursos/resiliencia', (req, res) =>{
    res.render('cursos/resiliencia')
});

app.get('/cursos/ie', (req, res) =>{
    res.render('cursos/ie')
});

app.get('/cursos/comunicacion', (req, res) =>{
    res.render('cursos/comunicacion')
});

module.exports = app