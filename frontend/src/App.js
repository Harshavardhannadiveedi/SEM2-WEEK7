import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import JobList from '../components/JobList';
import JobDetail from '../components/JobDetail';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/jobs/:id" element={<JobDetail />} />
                <Route path="/jobs" element={<JobList />} />
                <Route path="/" element={<JobList />} />
            </Routes>
        </Router>
    );
}

export default App;