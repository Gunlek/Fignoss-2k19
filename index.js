let express = require('express');

let app = express();

app.use(express.static("statics"));

app.get('/', (req, res) =>{
    res.render('index.html.twig');
});

app.get('/comment-venir/', (req, res) => {
    res.render('comment-venir.html.twig');
});

app.listen(8080);