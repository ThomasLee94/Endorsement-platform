/** Model for the skills categories */

/** Initialise mongoose */
let mongoose = require("mongoose");
let Schema = mongoose.Schema

let RelationshipSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    skillId: {
        type: Schema.Types.ObjectId,
        ref: "Skill"
    },
    // status: {
    //     type: String,
    //     default: "Pending",
    //     enum: ["Pending", "Approved"]
    // },
    voters: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
})

/** Generating the model for the relationship between users, skills and upvotes */
let Relationship = mongoose.model('Relationship', RelationshipSchema);

/** Exporting Relationship to be used in routes */
module.exports = Relationship;
