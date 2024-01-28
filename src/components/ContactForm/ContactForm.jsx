import React, { useState } from 'react';

export const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = (e) => {
    const { value, name } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
      <label style={{ display: 'flex', flexDirection: 'column', maxWidth: '150px' }}>
        Name:
        <input type="text" name="name" value={name} onChange={handleChange} required />
      </label>
      <label style={{ display: 'flex', flexDirection: 'column', maxWidth: '150px' }}>
        Tel:
        <input type="tel" name="number" value={number} onChange={handleChange} required />
      </label>
      <button type="submit" style={{ maxWidth: '150px' }}>
        Add contact
      </button>
    </form>
  );
};
