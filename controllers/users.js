const Skill = require("../models/skill");
const User = require("../models/user")


module.exports = (app) => {

    app.get('/skills/:skillId/users/new', (req, res) => {
        Skill.findById(req.params.skillId).then((skill) => {
            res.render('user-form', {skill: skill})
        })
    })

    // app.put('/skills/:skillId/users/:userId/upvotes', (req, res) => {

    //     //create instruction on what to update
    //     const whatToUpdate = {$inc : {'upVotes' : 1}};

    //     //pass instruction to mongo so it knows what to update
    //     User.findOneAndUpdate({_id: req.params.userId}, whatToUpdate).then(user => {

    //         //update the object to reflect the update in the model
    //         user.upVotes += 1

    //         //converts object to JSON object and sends it back to the webpage that made the request
    //         res.json(user);
    //         console.log(user)
    //     }).catch(err => {
    //         console.error(err.message)
    //     })
    // })

    app.post('/skills/users', (req, res) => {

        User.create(req.body).then(user => {
            console.log(req.body)
            res.redirect(`/skills/${user.skillId}`);
        }).catch((err) => {
            console.log(err.message)
        });
    });
}
