let express = require('express');

let app = express();

app.use(express.static("statics"));

app.get('/', (req, res) =>{
    res.render('index.html.twig');
});

app.get('/comment-venir/', (req, res) => {
    res.render('comment-venir.html.twig');
});

app.get('/le-gala/', (req, res) => {
    res.render('le-gala.html.twig');
});

app.get('/reservation/', (req, res) => {
    res.render('reservation.html.twig');
});

app.get('/artistes/', (req, res) => {
    res.render('artistes.html.twig');
});

app.get('/contact/', (req, res) => {
    res.render('contact.html.twig');
});

app.listen(1234);