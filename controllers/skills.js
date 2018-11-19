/** Importing models */
let Skill = require("../models/skills");

module.exports = (app) => {
    /** Routes */
    /** Index */
    app.get("/", (req, res) => {
        Skill.find()
            .then(skills) => {
                res.render("skills-category-index", {skills: skills})
            }.catch(err => {
                console.log(err)
            })
    })
}