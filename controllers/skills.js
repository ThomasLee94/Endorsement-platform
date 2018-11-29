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

    app.put("/skills/:id/vote-up", function(req, res) {
        Skill.findById(req.params.id).exec(function(err, skill) {
          skill.upVotes.push(req.user.skillId);
          skill.voteScore = skill.voteTotal + 1;
          skill.save();
      
          res.status(200);
        });
      });
}
