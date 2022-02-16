const express = require('express');
const bodyParser = require('body-parser');
//import { engine } from 'express-handlebars';
const handlebars = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');
const port = 3000;

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

// Static folder (CSS, JS,...)
app.use(express.static('public'));
//app.use('/public', express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    //res.send('Hello World');
    //res.render('main');
    res.render('main', {layout: 'index'});
});

app.post('/send', (req, res) =>{
    const output = `
    <p>Sie haben eine neue Kontaktaufnahme erhalten.</p>
    <h3>Kontaktdaten</h3>
    <ul>
    <li>Vorname: ${req.body.firstname}</li>
    <li>Nachname: ${req.body.lastname}</li>
    <li>E-Mail: ${req.body.mail}</li>
    <li>Betreff: ${req.body.subject}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.subject}</p>
    ` ;

    //console.log(req.body);
});

app.listen(port, () => console.log('Server started...'));
