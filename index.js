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

app.get('/countup.min.js', function(req, res) {
    res.sendFile(__dirname + '/node_modules/countup.js/dist/countup.min.js');
});

app.listen(1234);