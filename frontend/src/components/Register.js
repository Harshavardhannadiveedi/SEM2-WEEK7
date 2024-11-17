import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { registerUser } from '../api';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            await registerUser({ username, password });
            history.push('/login');
        } catch (error) {
            console.error(error.response.data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Register</button>
        </form>
    );
}

export default Register;