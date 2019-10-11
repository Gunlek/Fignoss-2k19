const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');

const app = express();

// Certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/gala-fignoss.fr/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/gala-fignoss.fr/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/gala-fignoss.fr/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

app.use((req, res) => {
	res.send('Hello there !');
});

// Starting both http & https servers
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

app.use(express.static("statics"));

app.get('/', (req, res) =>{
    res.render('index.html.twig');
});

app.get('/infos-pratiques/', (req, res) => {
    res.render('infos-pratiques.html.twig');
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

httpServer.listen(80, () => {
	console.log('HTTP Server running on port 80');
});

httpsServer.listen(443, () => {
	console.log('HTTPS Server running on port 443');
});