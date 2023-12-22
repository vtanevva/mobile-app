import React, { useState } from 'react';
import axios from 'axios';
import { loginUser } from '../api/api';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // try {
    //   const apiUrl = process.env.API_URL; 

    //   const response = await axios.post(`${apiUrl}/login`, {
    //     username,
    //     password,
    //   });

    //   console.log(response.data);
    // } catch (error) {
    //   console.error('Error:', error);
    // }
    try {
      const result = await loginUser(username, password);
      console.log('Login successful:', result);
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };
  

  return (
    <div>
      <h2>Login</h2>
      <form>
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

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
  };
export default Login;
