const Skill = require("../models/skill");
const User = require("../models/user"); 


module.exports = (app) => {

    app.post('/skills/users', (req, res) => {
        User.create(req.body).then(user => {
            console.log(req.body)
            res.redirect(`/skills/${user.skillId}`);
        }).catch((err) => {
            console.log(err.message)
        });
    });

    app.get('/profile/:id', (req, res) => {
        User.findById(req.params.id)
            .then((user) => {
                res.render("profile", {user: user})
            }).catch(err => {
                console.log(err)
            })
        
    })
}
