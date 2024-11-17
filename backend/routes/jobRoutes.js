const express = require('express');
const { createJob, getJobs } = require('../controllers/jobController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authenticate, createJob); // Create a job (requires authentication)
router.get('/', getJobs); // Get all jobs

module.exports = router;