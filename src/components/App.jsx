import React, { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, addContact, deleteContact } from '../redux/operations';
import { setFilter } from '../redux/filterSlice';

export const App = () => {
  const filters = useSelector((state) => state.filters.filters);
  const contacts = useSelector((state) => state.contacts.contacts.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = (newContact) => {
    const isNameExist = contacts.some((contact) => contact.name.toLowerCase() === newContact.name.toLowerCase());

    if (isNameExist) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    const contactWithId = { ...newContact, id: nanoid() };
    dispatch(addContact(contactWithId));
  };

  const handleFilterChange = (value) => {
    dispatch(setFilter(value));
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filters.toLowerCase()));

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <Filter filter={filters} onFilterChange={handleFilterChange} />
      {filteredContacts.length > 0 ? (
        <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
      ) : (
        <p>No contacts found</p>
      )}
    </div>
  );
};