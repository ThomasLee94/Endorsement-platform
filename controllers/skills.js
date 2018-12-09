/** Importing models */
const Skill = require("../models/skill");
const User = require("../models/user")

module.exports = (app) => {
    /** Routes */

    /** Index */
    app.get('/', (req, res) => {
        const user = res.locals.currentUser;
        console.log('user here ------------------------------------')
        console.log(user)
        if (user !== null) {
            Skill.find()
                .then((skills) => {
                res.render("skills-index", {skills: skills})
                }).catch(err => {
                    console.log(err)
                })
        } else {
            res.redirect('/login');
        }
    })

    /** Create Skill category (will be static, users will not be able to create/delete */
    app.get('/skills/:id', (req, res) => {
        // If statement used to force login page if cookies are not found. 
        if(req.cookies.nToken){
            Skill.findById(req.params.id)
            .then((skill) => {
                User.find({ skillId: req.params.id }).then(users => {
                    console.log(users)
                    res.render("skills-show", {skill: skill, users: users})
                })
            }).catch(err => {
                console.log(err)
            })
        } else {
            res.redirect("/login")
        }
        
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
