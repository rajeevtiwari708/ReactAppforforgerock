import React, { useState } from 'react';
import AuthenticateUser from "../../services/AuthService";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await AuthenticateUser(username, password); // Notice the capitalization
    if (result && result.success) {
      console.log("Logged in successfully");
      // Redirect or update the UI accordingly
    } else {
      console.error("Login failed");
      // Handle error, show message, etc.
    }
  };

  const inputStyle = {
    padding: '10px 15px',
    fontSize: '16px',
    width: '100%',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  const formStyle = {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
    borderRadius: '8px'
  };

  return (
    <div style={formStyle}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          style={inputStyle}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
