import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/operations'; 
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    const success = await dispatch(loginUser({ email, password }));

    if (success) {
      navigate('/contacts');
    } else {
      setError('Invalid email or password');
    }

    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleLogin}>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} required />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} required />
      </label>
      <br />
      <button type="submit">Login</button>
      <p style={{ color: 'red' }}>{error}</p>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>.
      </p>
    </form>
  );
};


