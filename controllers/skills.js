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
            res.render("skills-show", info)
        }).catch(err => {
            console.log(err)
        })
    })

    app.post("/skills/vote", (req, res) => {
         Relationship.findOne({userId: req.query.userId, skillId: req.query.skillId})
         .then(relationship => {
             if (relationship == null || relationship == undefined){
                 alert("ERROR")
             } else {
                 let check = false;
                 if (relationship.userId == req.query.voterId){
                    res.send("You can't upvote yourself!")
                 }
                //  looping through voters array to check
                // if the user already upvoted.
                 for (let i of relationship.voters) {
                     if (i == req.query.voterId) {
                         check = true;
                         res.send("Already upvoted!")
                     } 
                 }
                 if (check == false) {
                     relationship.voters.push(req.query.voterId)
                     relationship.save(err => {
                         res.redirect("/skills/" + req.query.skillId)
                     })
                 }
             }
         })
          
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
