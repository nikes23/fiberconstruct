const express = require('express');
const bodyParser = require('body-parser');
const {check, validationResult} = require('express-validator');
//import { engine } from 'express-handlebars';
const handlebars = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');
const port = process.env.PORT || 3000;

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

app.post('/send', urlencodedParser,[
    check('firstname', 'Der Vorname muss mindestens 3 Buchstaben lang sein')
        .exists()
        .isLength({min:3}),
    check('lastname', 'Der Nachname muss mindestens 3 Buchstaben lang sein')
        .exists()
        .isLength({min:3}),
    check('mail', 'Die E-Mail Adresse ist ungültig')
        .isEmail()
        .normalizeEmail(),
],(req, res) => {

    console.log(req.body)

    const booleanSell = !!req.body.datenschutzCheckBox;
    console.log(booleanSell)

    const errors = validationResult(req)
    if(!errors.isEmpty()){
    }

    const output = `
    <p>Sie haben eine neue Kontaktaufnahme erhalten.</p>
    <h3>Kontaktdaten</h3>
    <ul>
    <li>Vorname: ${req.body.firstname}</li>
    <li>Nachname: ${req.body.lastname}</li>
    <li>E-Mail: ${req.body.mail}</li>
    <li>Betreff: ${req.body.subject}</li>
    <li>Datenschutzerklärung: Akzeptiert</li>
    </ul>
    <h3>Nachricht:</h3>
    <p>${req.body.message}</p>
    `;

    //console.log(req.body);
    /*async function main() {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'anton.kempf@hotmail.com', // generated ethereal user
            pass: '34>*7R6g77V?6@', // generated ethereal password
        },
        tls:{
            rejectUnauthorized:false
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Nodemailer Contact" <anton.kempf@hotmail.com>', // sender address
        to: "nikes23@hotmail.de, anton.kempf@region10.group", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: output, // html body
    });

    transporter.verify(function(error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log('Server is ready to take our messages');
            }
        });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        res.render('contact', {msg:'Email has been sent'})
    }*/


    const transport = nodemailer.createTransport({
        host: "smtp.strato.de",
        //host: "smtp-mail.outlook.com",
        //port: 587,
        port: 465,
        auth: {
            //user: "anton.kempf@hotmail.com",
            //pass: "34>*7R6g77V?6@"
            user: "webmaster@fiberconstruct.de",
            pass: "cnu@GBW2ahc_wrw*uhb",

        }
    });

    const mailOptions = {
        from: '"Example Team" <anton.kempf@hotmail.com>',
        //from: req.body.mail,
        to: 'info@fiberconstruct.de, nikes23@hotmail.de',
        subject: 'Neue Nachricht vom Kontaktformular',
        text: '',
        html: output,
        //html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br /><img src="cid:uniq-mailtrap.png" alt="mailtrap" />',
        /*attachments: [
            {
                filename: 'mailtrap.png',
                path: __dirname + '/mailtrap.png',
                cid: 'uniq-mailtrap.png'
            }
        ]*/
    };

    transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        res.render('main', {layout: 'index', msg:'Email has been sent'});
        res.send('success')
    });



});

app.listen(port, () => console.log('Server started on port: ' + port));
