const Job = require('../models/Job');

exports.createJob = async (req, res) => {
    const { title, description, company } = req.body;

    try {
        const job = new Job({ title, description, company });
        await job.save();
        res.status(201).json(job);
    } catch (error) {
        res.status(400).json({ message: 'Error creating job' });
    }
};

exports.getJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching jobs' });
    }
};