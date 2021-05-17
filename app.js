const express = require('express');
require('dotenv').config();

const app = express();

const port = process.env.PORT;

app.listen(port)

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home',
        header: 'Show the World'
    });
})

app.get('/create-article', (req, res) => {
    res.render('create-article', {
        title: 'New article',
        header: 'Create new article'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        header: 'About the Site'
    })
})