const express       = require('express');
const dotenv        = require('dotenv');
const bodyParser    = require('body-parser');
const mongoose      = require('mongoose');
const cors          = require('cors');
const morgan        = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const errorHandler  = require('./Middleware/error');

// Load ENV vars
dotenv.config({ path: './.env'});
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
const transactions = require("./Route/transactions");

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Cookie parser
app.use(cookieParser());
app.use(cors());

var port = process.env.PORT || 5000;

// Development logging
if(process.env.NODE_ENV === 'development'){
    app.get('/', (req, res) => res.send('Hello from Bitako.Cards'));
    app.use(morgan('dev'));
}

// Production
if(process.env.NODE_ENV === 'production'){
    // serve static assets normally
    app.use(express.static(__dirname + '/public'));

    // handle every other route with index.html, which will contain
    // a script tag to your application's JavaScript file(s).
    app.get('*', function (request, response) {
      response.sendFile(path.resolve(__dirname, 'index.html'));
    });
}

// Mount API routes in the App
app.use('/api/auth', auth);
app.use('/api/users', users);
app.use('/api/cards', cards);
app.use('/api/webhooks', webhooks);
app.use('/api/transactions', transactions);
app.use(errorHandler);

// Launch app to listen to specified port
app.listen(port, function () {
    console.log(`Running Bitako.Cards in ${process.env.NODE_ENV} mode on port ` + port);
});
