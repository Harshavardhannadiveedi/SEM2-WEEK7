import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchJobs } from '../api';

function JobDetail() {
    const { id } = useParams();
    const [job, setJob] = useState(null);

    useEffect(() => {
        const getJobDetails = async () => {
            try {
                const response = await fetchJobs(); // Adjust this to fetch a single job if needed.
                const foundJob = response.data.find(j => j._id === id);
                setJob(foundJob);
            } catch (error) {
                console.error(error.response.data.message);
            }
        };

        getJobDetails();
    }, [id]);

    if (!job) return <div>Loading...</div>;

    return (
        <div>
            <h1>{job.title}</h1>
            <p>{job.description}</p>
            <p>{job.company}</p>
        </div>
    );
}

export default JobDetail;