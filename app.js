/**
* Project: Endorsement Platform (EndorseMe)
*/

/** Require npm packages */
const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
/** ! Above npm packages installed & nodemon*/

/** Run app.js as an instance express */
let app = express()

/** Connecting to mongoose */
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/endorsement-platform', { useNewUrlParser: true });

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected successfully.');
});

/** Use handlebars for client-side rendering */
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

/** Use body-parser */
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use('/public', express.static('public'));


require('./controllers/skills')(app);

/**Port */
const port = process.env.PORT || 3000;
app.listen(port)
