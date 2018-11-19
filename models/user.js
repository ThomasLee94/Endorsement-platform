/** Model for the user */

/** Initialise mongoose */
let mongoose = require("mongoose");

let UserSchema = new mongoose.Schema({
    profilePicture: true,
    name: String, 
    company: String,
    position: String, 
    /** connect topThreeSkills with Skills model through associations */
    topThreeSkills: String
})

/** Generating the model for User*/
let User = mongoose.model('User', UserSchema);

/** Exporting User to be used in routes */
module.exports = User;