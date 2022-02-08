const express       = require('express');
const dotenv        = require('dotenv');
const bodyParser    = require('body-parser');
const mongoose      = require('mongoose');
const morgan        = require('morgan');
const cookieParser = require('cookie-parser');
const errorHandler  = require('./Middleware/error');

// Load ENV vars
dotenv.config({ path: './config/config.env'});
// Initialise the app
const connectDB = require('./config/db');

// Connect to database
connectDB();
const app = express();

// Import routes files
const auth = require("./Route/auth");
const users = require("./Route/users");
const cards = require("./Route/cards");
const webhooks = require("./Route/webhooks");

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

// Mount API routes in the App
app.use('/api/auth', auth);
app.use('/api/users', users);
app.use('/api/cards', cards);
app.use('/api/webhooks', webhooks);
app.use(errorHandler);

// Launch app to listen to specified port
app.listen(port, function () {
    console.log(`Running Bitako.Cards in ${process.env.NODE_ENV} mode on port ` + port);
});