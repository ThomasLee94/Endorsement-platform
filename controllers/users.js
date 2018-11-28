let Skill = require("../models/skill");
let User = require("../models/user")


module.exports = (app) => {

    app.get('/skills/:skillId/users/new', (req, res) => {
        Skill.findById(req.params.skillId).then((skill) => {
            res.render('user-form', {skill: skill})
        })
    })

    app.post('/skills/users', (req, res) => {
        User.create(req.body).then(user => {
            console.log(req.body)
            res.redirect(`/skills/${user.skillId}`);
        }).catch((err) => {
            console.log(err.message)
        });
    });
}
