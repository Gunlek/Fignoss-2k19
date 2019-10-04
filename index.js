let express = require('express');

let app = express();

app.use(express.static("statics"));

app.get('/', (req, res) =>{
    res.render('index.html.twig');
});

app.listen(8080);