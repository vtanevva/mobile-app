import React, { useState } from 'react';
import { registerUser } from '../api/api';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = async () => {
    try {
      const result = await registerUser(username, password);
      console.log('User registered:', result);
    } catch (error) {
      console.error('Registration failed:', error.message);
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
            {showPassword ? (
              <FontAwesomeIcon icon={faEyeSlash} />
            ) : (
              <FontAwesomeIcon icon={faEye} />
            )}
          </button>
        </div>
        <br />
        <h5 className="reset"></h5>
        <button
          className="button login-button"
          type="button"
          onClick={handleRegister}
          disabled={loading}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>

        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button className="button skip"><Link to="/" className="grey-link">
            Skip Now
          </Link>
          </button>
      </form>
    </div>
  );
};

export default Register;
