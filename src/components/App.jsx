import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, addContact, deleteContact } from '../redux/operations';
import { setFilter } from '../redux/filterSlice';

export const App = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const filters = useSelector((state) => state.filters.filters);
  const contacts = useSelector((state) => state.contacts.contacts.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNameExist = contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase());

    if (isNameExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(newContact));
    setName('');
    setNumber('');
  };

  const handleFilterChange = (e) => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm name={name} number={number} handleChange={handleChange} handleSubmit={handleSubmit} />
      <Filter filter={filters}  handleFilterChange={handleFilterChange}/>
      {filteredContacts.length > 0 ? (
        <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
      ) : (
        <p>No contacts found</p>
      )}
    </div>
  );
};
