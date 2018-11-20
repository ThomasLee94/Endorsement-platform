/** Importing models */
let Skill = require("../models/catagory-skills");

module.exports = (app) => {
    /** Routes */

    /** Index */
    app.get('/', (req, res) => {
        Skill.find()
            .then((skills) => {
                console.log(skills)
               res.render("skills-category-index", {skills: skills})
            }).catch(err => {
                console.log(err)
            })
    })

    app.get('/skills/:id', (req, res) => {
        Skill.findById(req.params.id)
            .then((skill) => {
                console.log(req.params.id)
                res.render("skill-users", {skill: skill})
            }).catch(err => {
                console.log(err)
            })
    })

    /** Create Skill category (will be static, users will not be able to create/delete */
    app.post('/skills', (req, res) => {
        Skill.create(req.body)
            .then((skill) => {
                res.render('skills-category-index');
            }).catch((err) => {
                console.log(err)
            })
    })

    /** Update skill categories */
    app.put('/skills/:id', (req, res) => {
        Skill.findByIdAndUpdate(req.params.id, req.body)
            .then((list) => {
                res.redirect('skills-category-index')
            }).catch((err) => {
                console.log(err)
            })
    })
}
