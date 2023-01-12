require('dotenv').config();
const express = require('express');
var hbs = require('hbs');

const app = express();
const port = process.env.PORT;


// require('hbs)
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');

// Servir contenido estático
app.use( express.static('public') )

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Alonso Quispe',
        titulo: 'Curso de Node'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Alonso Quispe',
        titulo: 'Curso de Node'
    });
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Alonso Quispe',
        titulo: 'Curso de Node'
    });
})

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html')
})

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })