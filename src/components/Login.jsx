// client/src/components/Login.jsx

import React, { useState } from 'react';
import axios from 'axios';
const authToken = import.meta.env.VITE_REACT_APP_AUTH_TOKEN;
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Use environment variable for API URL
      const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

      // Make a request to the login endpoint
      const response = await axios.post(`${apiUrl}/auth/login`, {
        username,
        password,
      });

      console.log(response.data); // Log the response from the server
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        {/* Your form inputs */}
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

        {/* Submit button */}
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
