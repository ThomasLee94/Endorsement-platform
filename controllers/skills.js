/** Importing models */
let Skill = require("../models/skill");
let User = require("../models/user")

module.exports = (app) => {
    /** Routes */

    /** Index */
    app.get('/', (req, res) => {
        Skill.find()
            .then((skills) => {
               res.render("skills-index", {skills: skills})
            }).catch(err => {
                console.log(err)
            })
    })

    /** Create Skill category (will be static, users will not be able to create/delete */
    app.get('/skills/:id', (req, res) => {
        Skill.findById(req.params.id)
            .then((skill) => {
                User.find({ skillId: req.params.id }).then(users => {
                    console.log(users)
                    res.render("skills-show", {skill: skill, users: users})
                })
            }).catch(err => {
                console.log(err)
            })
    })

    app.put("/skills/:skill_id/vote-up", function(req, res) {
        // This will work once i do authentication. 
          Vote.find({ skillId: skill_id, userId: currentUser._id}).then(results => {
            if (results.length > 0) {
                res.send("Cannot upvote.")
            }
            
            // TODO: Find the skill that is referenced by skill_id and increment it up by 1.

            vote = Vote({ skillId: skill_id, userId: currentUser._id}).save().then(vote => {
                res.send('upvoted!')
            }).catch(error => {
                res.send(error.message)
            })
          });
      });
}
