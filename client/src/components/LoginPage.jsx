import React, { useState } from 'react';
import { loginUser } from '../api/api';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

const Login = () => {
  const navigate = useNavigate(); // Get the navigate function from react-router-dom
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const result = await loginUser(username, password);
      console.log('Login successful:', result);
      // Redirect to the '/game' route upon successful login
      navigate('/game');
    } catch (error) {
      console.error('Login failed:', error.message);
      setError('Invalid, please try again.'); // Set error message for display
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main">
      <h2 className="title">Hey, <br /> Login Now</h2>
      <h5 className="sub-title">
        If you are new /
        <Link to="/register" className="register-path">
          Create New
        </Link>
      </h5>

      <form className="form form-login" onSubmit={handleLogin}>
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
        <h5 className="reset">
          Forgot password? /
          <Link to="/register" className="register-path">
            Reset
          </Link>
        </h5>
        <div className="login-buttons">
          <button
            className="button login-button"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>{' '}
          <br />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button className="button skip">
            <Link to="/game" className="grey-link">
              Skip Now
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
