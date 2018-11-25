let Skill = require("../models/skill");
let User = require("../models/user")


module.exports = (app) => {

    app.post('/skills/users', (req, res) => {
        User.create(req.body).then(user => {
            console.log(req.body)
            console.log("working")
            res.redirect(`/skills/${user.skillId}`);
        }).catch((err) => {
            console.log(err.message)
        });
    });
}
