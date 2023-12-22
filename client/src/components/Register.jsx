import React, { useState } from 'react';
import { registerUser } from '../api/api';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiUrl = process.env.API_URL; 

    const handleRegister = async () => {
      try {
        const result = await registerUser(username, password);
        console.log('User registered:', result);
      } catch (error) {
        console.error('Registration failed:', error.message);
      }
    };
    // try {
    //   setLoading(true);
    //   setError(null);

    //     const response = await fetch(`${apiUrl}/register`, {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({ username, password }),
    //     });

    //     if (!response.ok) {
    //       throw new Error('Registration failed');
    //     }

    //     const data = await response.json();
    //     console.log(data);
    //   } catch (error) {
    //     setError('Registration failed. Please try again.');
    //     console.error('Registration error:', error);
    //   } finally {
    //     setLoading(false);
    //   }

  return (
    <div>
      <h2>Register</h2>
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

        <button type="button" onClick={handleRegister} disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default Register;
