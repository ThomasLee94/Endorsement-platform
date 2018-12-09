/** Importing models */
const Skill = require("../models/skill");
const User = require("../models/user")
const Relationship = require("../models/relationship");

module.exports = (app) => {
    /** Routes */

    // Forcing login page for all routes. 
    app.use("*", (req, res, next) => {
        if(req.cookies.nToken){
            next();
        } else {
            res.redirect("/login");
        }
    })

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

    /** Showing all users for a specific skill*/
    app.get('/skills/:id', (req, res) => {
        // Display all approved users for skill x once they click the apply button.
        let info = {new: false, userId: req.userId}
        Skill.findById(req.params.id)
        .then((skill) => {
            info.skill = skill
            return Relationship.findOne({userId: req.userId, skillId: req.params.id})
        })
        .then(relationship => {
            if(!relationship){
                info.new = true;
            }
            return Relationship.find({skillId: req.params.id}).populate("userId")
        })
        .then(users => {
            info.users = users
            console.log("INFO***************************", info)
            res.render("skills-show", info)
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

      app.post("/skills/apply", (req, res) => {
        Relationship.create(req.query).then(relationship => {
            console.log(req.query)
            res.redirect(`/skills/${req.query.skillId}`);
        }).catch((err) => {
            console.log(err.message)
        });
      })

      
}
