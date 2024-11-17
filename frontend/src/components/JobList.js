import React, { useEffect, useState } from 'react';
import { fetchJobs } from '../api';
import { Link } from 'react-router-dom';

function JobList() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const getJobs = async () => {
            try {
                const response = await fetchJobs();
                setJobs(response.data);
            } catch (error) {
                console.error(error.response.data.message);
            }
        };
        
        getJobs();
     }, []);

     return (
         <div>
             <h1>Available Jobs</h1>
             <ul>
                 {jobs.map((job) => (
                     <li key={job._id}>
                         <h3>{job.title}</h3>
                         <p>{job.description}</p>
                         <p>{job.company}</p>
                         <Link to={`/jobs/${job._id}`}>View Details</Link>
                     </li>
                 ))}
             </ul>
         </div>
     );
}

export default JobList;