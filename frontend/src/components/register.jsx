import React, { useState } from "react";
import axios from "axios";
import "./register.css";
import { useNavigate } from "react-router-dom";
function RegistrationPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
        console.log({
            name,
            email,
            password
          });
      const response = await axios.post('http://localhost:5000/api/signup', {
        name,
        email,
        password
      });
     navigate('/home')
      console.log(response.data);
      // Handle successful registration (e.g., redirect to login page)
    } catch (error) {
      console.error("Registration Error:", error);
      setError("Registration failed. Please try again.");
    }
  };
  const handleClick = () => {
    navigate('/home'); // replace '/path' with the desired route
};

  return (
    <div className="registration-container">
      <div className="registration-header">
        <h2 className="registration-text">Registration Page</h2>
        <div className="registration-underline"></div>
      </div>
      {error && <p className="error-message">{error}</p>}
      <form className="registration-form" onSubmit={handleRegister}>
        <div className="registration-inputs">
          <div className="registration-input">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="registration-input">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="registration-input">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="registration-submit-container">
          <button type="submit" className="registration-submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationPage;
