const express       = require('express');
const dotenv        = require('dotenv');
const bodyParser    = require('body-parser');
const mongoose      = require('mongoose');
const morgan        = require('morgan');
const cookieParser = require('cookie-parser');

// Load ENV vars
dotenv.config({ path: './config/config.env'});
// Initialise the app
const connectDB = require('./config/db');

// Connect to database
connectDB();
const app = express();

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Cookie parser
app.use(cookieParser());

var port = process.env.PORT || 5000;
app.get('/', (req, res) => res.send('Hello from Bitako.Cards'));

// Development logging
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

// Launch app to listen to specified port
app.listen(port, function () {
    console.log(`Running Bitako.Cards in ${process.env.NODE_ENV} mode on port ` + port);
});