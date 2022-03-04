const express = require('express');
const bodyParser = require('body-parser');
const {check, validationResult} = require('express-validator');
//import { engine } from 'express-handlebars';
const handlebars = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');
const http = require('http');
const hostname = 'localhost';
const port = process.env.PORT || 3000;
//const porttwo = process.env.PORT || 3001;

//Creates our express server
const app = express();

// View engine setup
//app.engine('handlebars', exphbs.engine());
app.engine('hbs', handlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'planB',
    partialsDir: __dirname + '/views/partials/'
}));
app.set('view engine', 'hbs');

const urlencodedParser = bodyParser.urlencoded({extended:false});

// Static folder (CSS, JS,...)
app.use(express.static('public'));
app.use(express.json())
//app.use('/public', express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    //res.send('Hello World');
    //res.render('main');
    res.render('main', {layout: 'index'});
});

app.get('/datenschutz', (req, res) => {
    res.render('main', {layout: 'datenschutz'});
});

app.get('/impressum', (req, res) => {
    res.render('main', {layout: 'impressum'});
});



app.listen(port, () => console.log('Server started on port: ' + port));


/*const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!\n');
});

server.listen(porttwo, hostname, () => {
    console.log(`Server running at http://${hostname}:${porttwo}/`);
});*/
