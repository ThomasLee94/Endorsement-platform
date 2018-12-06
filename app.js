/**
*******************************************
* Project: ENDORSEMENT PLATFORM (EndorseMe)
*******************************************
*/

/** Require npm packages */
require('dotenv').config();
const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
/** ! Above npm packages installed & nodemon*/

/** Run app.js as an instance express */
let app = express();

/** Initialising cookieParser  */
app.use(cookieParser());

// Custom authentication middleware + initialisation. 
// Checking the validity of nToken. 
let checkAuth = (req, res, next) => {
    console.log("Checking authentication");
    if (typeof req.cookies.nToken === 'undefined' || req.cookies.nToken === null) {
        console.log("not logged in");
        res.locals.currentUser = null;
    } else {
        console.log("logged in");
        let token = req.cookies.nToken;
        let decodedToken = jwt.decode(token, { complete: true }) || {};
        
        res.locals.currentUser = decodedToken.payload;
    }

    next();
};

app.use(checkAuth);

/** Connecting to mongoose */
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/endorsement-platform', { useNewUrlParser: true });

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected successfully.');
});


/** Use body-parser */
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use('/public', express.static('public'));

/** Use handlebars for client-side rendering */
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

require('./controllers/skills')(app);
require('./controllers/users')(app);
require('./controllers/auth')(app);

/**Port */
const port = process.env.PORT || 3000;
app.listen(port)
