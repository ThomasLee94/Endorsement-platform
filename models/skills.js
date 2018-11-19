/** Model for the skills categories */

/** Initialise mongoose */
let mongoose = require("mongoose");

let SkillSchema = new mongoose.Schema({
    name: String,
    description: String,
    votes: 
    {
      up: {
        type: Number,
        default: 0
      },
      down: {
        type: Number,
        default: 0
      },
      total: {
        type: Number,
        default: 0
      }
    }
})

/** Generating the model for Skill */
let Skill = mongoose.model('Skill', SkillSchema);

/** Exporting Skill to be used in routes */
module.exports = Skill;