import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/operations'; 
import { Filter } from './Filter';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters.filters);
  const contacts = useSelector((state) => state.contacts.contacts.items);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <>
    <Filter/>
    <ul>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button type="button" onClick={() => handleDeleteContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
    </>
  );
};
