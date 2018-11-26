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

    /** Create Skill category (will be static, users will not be able to create/delete */
    // app.post('/users/:id', (req, res) => {
    //     User.create(req.body)
    //         .then((user) => {
    //             console.log(user)
    //             console.log("here")
    //             res.render("skills-show", {user: user})
    //         }).catch((err) => {
    //             console.log(err)
    //         })
    // })

    /** Update skill categories */
    // app.put('/skills/:id', (req, res) => {
    //     Skill.findByIdAndUpdate(req.params.id, req.body)
    //         .then((list) => {
    //             res.redirect('skills-category-index')
    //         }).catch((err) => {
    //             console.log(err)
    //         })
    // })
}
