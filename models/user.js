/** Model for the user */

/** Initialise mongoose */
let mongoose = require("mongoose");
let Schema = mongoose.Schema

let UserSchema = new Schema({
    // profilePicture: Boolean,
    name: {required: true, type: String},
    company: {required: true, type: String},
    position: {required: true, type: String},
    skillOne: String,
    skillTwo: String,
    skillThree: String,
    upVotes: {default: 0, required: true, type: Number},
    /** connect topThreeSkills with Skills model through associations */
    skillId: {type: Schema.Types.ObjectId, ref: 'Skill'}
})

/** Generating the model for User*/
let User = mongoose.model('User', UserSchema);

/** Exporting User to be used in routes */
module.exports = User;
