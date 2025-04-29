import express from "express" 

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'public/views');

app.use(express.static('public'));

app.get('/', (_, res) => {
    res.render('index')
});

app.get('/proceso', (_, res) => {
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


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});


