const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const Post = require('./models/post');

const app = express();

const port = process.env.PORT || 3000;

const dbURI = process.env.DBURI;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(port , () => console.log(`app is listeing to http://localhost:${port}`)))
    .catch((err) => console.log(err));

app.set('view engine', 'ejs');

app.use(express.static('public'));
// For accepting formdata
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.redirect('/posts');
})

app.get('/posts', (req, res) => {
    Post.find()
        .then((result) => {
            res.render('index', {
                title: 'Home',
                header: 'Show the World',
                posts: result
            });
        })
        .catch(err => console.log(err));
})

app.post('/posts', (req, res) => {
    const post = new Post(req.body);

    post.save()
        .then(result => res.redirect('/posts'))
        .catch(err => console.log(err));
})

app.get('/create-post', (req, res) => {
    res.render('create-post', {
        title: 'New Post',
        header: 'Create new post'
    })
})

app.post('/create-post', (req, res) => {
    const post = new Post(req.body);

    post.save()
        .then((result) => res.redirect('/'))
        .catch((err) => console.log(err))
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        header: 'About the Site'
    })
})

