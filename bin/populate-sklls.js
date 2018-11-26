const mongoose = require("mongoose");
const Skill = require('../models/skill')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/endorsement-platform', { useNewUrlParser: true });

skillData = [
    {
        name: 'JavaScript',
        description: ''
    },
    {
        name: 'Python',
        description: ''
    },
    {
        name: 'Swift',
        description: ''
    },
    {
        name: 'C',
        description: ''
    },
    {
        name: 'Java',
        description: ''
    },
    {
        name: 'Objective C',
        description: ''
    },
    {
        name: 'Go',
        description: ''
    },
    {
        name: 'React',
        description: ''
    },
    {
        name: 'Node',
        description: ''
    },
    {
        name: 'MySQL',
        description: ''
    },
    {
        name: 'Sass',
        description: ''
    },
    {
        name: 'Ruby',
        description: ''
    },
    {
        name: 'Flask',
        description: ''
    },
    {
        name: 'C',
        description: ''
    }
]

skillData.forEach(element => {
    Skill.create(element)
        .then((skill) => {
            console.log("skill created")
        }).catch(err => {
            console.log(err)
        })
});

