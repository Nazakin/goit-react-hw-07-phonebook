import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux'; 
import { addContact } from '/Users/nazakin/Documents/GitHub/goit-react-hw-07-phonebook/src/redux/operations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch(); 
  const contacts = useSelector((state) => state.contacts.contacts.items); 

  const handleChange = (e) => {
    const { value, name } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddContact({ name, number });
    setName('');
    setNumber('');
  };

  const handleAddContact = (newContact) => {
    const isNameExist = contacts.some((contact) => contact.name.toLowerCase() === newContact.name.toLowerCase());

    if (isNameExist) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    const contactWithId = { ...newContact, id: nanoid() };
    dispatch(addContact(contactWithId));
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
