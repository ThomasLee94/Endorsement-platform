/** Model for the user */

/** Initialise mongoose */
let mongoose = require("mongoose");
let schema = mongoose.Schema

let UserSchema = new schema({
    profilePicture: true,
    name: String,
    company: String,
    position: String,
    /** connect topThreeSkills with Skills model through associations */
    skills: [
        {type: schema.Types.ObjectId ref: 'user-skills'}
    ]
})

/** Generating the model for User*/
let User = mongoose.model('User', UserSchema);

/** Exporting User to be used in routes */
module.exports = User;
