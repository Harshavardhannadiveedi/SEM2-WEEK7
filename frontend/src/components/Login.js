import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { loginUser } from '../api';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await loginUser({ username, password });
            localStorage.setItem('token', response.data.token);
            history.push('/jobs');
        } catch (error) {
            console.error(error.response.data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;