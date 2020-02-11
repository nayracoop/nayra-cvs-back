const {Schema, model} = require('mongoose')

const technologySchema = {
    to: String,
    name: String,
    logo: String
}

const experienceSchema = {
    experienceType: String,
    title: String,
    from: String,
    to: String,
    institution: String,
    place: String,
    description: String,
    technologies: [technologySchema],
    percentaje: String
}

const partnerSchema = new Schema({
    slug: {
        type: String, 
        required: true,
        unique: true
    },
    name: {
        type: String, 
        required: true
    },
    lastname: {
        type: String, 
        required: true
    },
    role: {
        type: String, 
        required: true
    },
    profile: {
        type: String, 
        required: true
    },
    experiences: [experienceSchema],
    technologies: [technologySchema],
})

module.exports = model('Partner', partnerSchema)

