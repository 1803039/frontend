import logo from './logo.svg';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const environment = process.env.REACT_APP_ENV || "Unknown";

    const handleLogin = async () => {
        try {
            const backendUrl = process.env.BACK_END_URL;
            const response = await axios.post(`${backendUrl}/login`, {
                username,
                password
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Error connecting to the server');
        }
    };

    return (
        <div>
            <h1>Login in {environment}</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            <p>{message}</p>
        </div>
    );
}

export default App;
