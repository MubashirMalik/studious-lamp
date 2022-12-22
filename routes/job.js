const express = require('express')

const jobControllers = require('../controllers/job')

const router = express.Router()

router.get('/get-job', jobControllers.getJob)

router.get('/get-jobs', jobControllers.getJobs)

router.post('/post-job', jobControllers.postJob)

router.patch('/update-job', jobControllers.updateJob)

module.exports = router