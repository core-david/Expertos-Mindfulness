const express = require('express');
const { v4 } = require('uuid');


const app = express();

app.get('/api', (req, res) => {
    const path = `/api/item/${v4()}`;
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});
  
app.get('/api/item/:slug', (req, res) => {
const { slug } = req.params;
res.end(`Item: ${slug}`);
});

// app.listen(5000);

app.set('view engine', 'ejs');
app.set('views', 'public/views')

// app.use(express.static('public'));


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