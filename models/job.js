const mongoose = require('mongoose')

const jobSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    mode: {
        type: String,
        required: true,
    },
    type:  {
        type: String,
        required: true
    },
    engagement: {
        type: String,
        required: true
    }, 
    location: {
        city: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        }
    },
    description: {
        type: String,
        required: true
    },
    datePosted: {
        type: Date,
        required: true,
        default:  Date.now()
    },
    // wallet address of the job poster
    posterAddress: {
        type: String,
        required: true
    }
}, { versionKey: false })

module.exports = mongoose.model('Job', jobSchema)