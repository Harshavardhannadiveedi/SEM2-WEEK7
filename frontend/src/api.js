import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:5000/api',
});

// User authentication functions
export const registerUser = async (userData) => {
    return await apiClient.post('/auth/register', userData);
};

export const loginUser = async (userData) => {
    return await apiClient.post('/auth/login', userData);
};

// Job management functions
export const fetchJobs = async () => {
    return await apiClient.get('/jobs');
};

export const createJob = async (jobData, token) => {
    return await apiClient.post('/jobs', jobData, {
        headers: { Authorization: `Bearer ${token}` },
    });
};