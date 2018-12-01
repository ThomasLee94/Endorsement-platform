/** Model for the user */

/** Initialise mongoose */
let mongoose = require("mongoose");
let Schema = mongoose.Schema

let VoteSchema = new Schema({
    // profilePicture: Boolean,
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    /** connect topThreeSkills with Skills model through associations */
    skillId: {type: Schema.Types.ObjectId, ref: 'Skill'}
})

/** Generating the model for User*/
let Vote = mongoose.model('Vote', VoteSchema);

/** Exporting User to be used in routes */
module.exports = Vote;


