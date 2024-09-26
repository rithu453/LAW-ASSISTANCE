// components/loginpage/LoginPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Import your custom CSS file
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // const handleRegister = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('http://localhost:5000/api/signin', {
  //       username,
  //       password,
  //     });
  //     console.log(response.data); // Handle successful registration response
  //     setError('');
  //     // Navigate to login page after successful registration
  //     navigate('/login');
  //   } catch (error) {
  //     setError(error.response?.data?.message || 'Registration failed.');
  //   }
  // };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/signin', {
        email,
        password,
      });
      console.log(response.data); // Handle successful login response
      setError('');
      // Optionally redirect to another page upon successful login
      navigate('/home');
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h2 className="login-text">Login Page</h2>
        <div className="login-underline"></div>
      </div>
      {error && <p className="error-message">{error}</p>}
      <form className="login-form" onSubmit={handleLogin}>
        <div className="login-inputs">
          <div className="login-input">
            <input
              type="text"
              placeholder="EMAIL"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
            />
          </div>
          <div className="login-input">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <p className="login-forgot-password">
            Forgot password? <span>Reset here</span>
          </p>
        </div>
        <div className="login-submit-container">
          <button type="submit" className="login-submit">
            Login
          </button>
          
          <Link to="/register">
          <button type="button" className="login-submit login-gray" style={{textDecoration:'none'}}>register  </button></Link>
         
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
