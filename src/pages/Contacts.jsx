import React, { useEffect } from 'react';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/operations';



export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
  <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <ContactList/>
  </div>
  );
};