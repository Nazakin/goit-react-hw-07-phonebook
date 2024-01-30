import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/operations';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }

    const success = await dispatch(registerUser({ name, email, password }));

    if (success) {
      navigate('/contacts');
    } else {
      setError('Registration failed');
    }

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleRegister}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} required />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} required />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} required />
      </label>
      <button type="submit">Register</button>
      <p style={{ color: 'red' }}>{error}</p>
      <p>
        Already have an account? <Link to="/login">Login here</Link>.
      </p>
    </form>
  );
};


