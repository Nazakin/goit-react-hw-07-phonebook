import React, { useEffect } from 'react';
import { ContactForm } from '../components/ContactForm';
import { ContactList } from '../components/ContactList';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/operations';

export const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
};
