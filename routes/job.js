const express = require('express')

const jobControllers = require('../controllers/job')

const router = express.Router()

router.get('/get-jobs', jobControllers.getJobs)

router.post('/post-job', jobControllers.postJob)

module.exports = router