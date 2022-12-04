const Job = require('../models/job')

exports.postJob = async (req, res, next) => {
    try {
        const { job } = req.body
        // create location object inside job
        job.location = {
            city: job.city,
            country: job.country
        }
        // delete city and country keys
        delete job['city']
        delete job['country']
        const insertedJob = await Job.create(job);
        res.status(200).json(insertedJob)
    } catch (err) {
        console.log("postJob():", err)
        res.status(500).json({error: "Internal server error"})
    }
}

exports.getJobs = async (req, res, next) => {
    try {
        const jobs = await Job.find()
        res.status(200).json(jobs)
    } catch (err) {
        console.log("getJobs():", err)
        res.status(500).json({error: "Internal server error"})
    }
}