import React, { useState } from 'react';
import { registerUser } from '../api/api';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Set initial state to false
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleRegister = async () => {
    try {
      setLoading(true);
      setError(null);

      const result = await registerUser(username, password);
      console.log('User registered:', result);

      // Optionally, you can redirect the user to another page after successful registration
      // history.push('/dashboard');
    } catch (error) {
      console.error('Registration failed:', error.message);
      setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main">
      <h2 className="title">Hey, <br /> Register Now</h2>
      <h5 className="sub-title">
        If you already have an account /
        <Link to="/login" className="register-path">
          Login
        </Link>
      </h5>

      <form className="form" onSubmit={handleRegister}>
        <input
          className="form-username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />{' '}
        <br />
        <div className="password-input">
          <input
            className="form-password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
  className="toggle-password"
  type="button"
  onClick={handleTogglePassword}
>
  <i className={showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'}></i>
</button>

        </div>
        <br />
        <h5 className="reset"></h5>
        <button
          className="button register-button"
          type="submit"
          disabled={loading}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>

        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>

      <div className="button skip">
        <Link to="/game" className="grey-link">
          Skip Now
        </Link>
      </div>
    </div>
  );
};

export default Register;
