const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'public/views');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/proceso', (req, res) => {
    res.render('proceso')
});

app.get('/cursos/:id', (req, res) => {
    const id = req.params.id;

    res.render(`cursos/${id}`, (err) => {
        if (err) {
            res.status(404).sendFile(`${process.cwd()}/public/views/404.html`)
        } else {
            res.status(200).render(`cursos/${id}`)
        }
    })
})

app.listen(3000, () => console.log("App is listening in http://localhost:3000"));
