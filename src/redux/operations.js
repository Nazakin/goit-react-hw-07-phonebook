import { createAsyncThunk } from "@reduxjs/toolkit";

const apiEndpoint = "https://65a470ca52f07a8b4a3d68dc.mockapi.io/contacts/contacts";

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
    const response = await fetch(apiEndpoint);
    const data = await response.json();
    return data;
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact) => {
    const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
    });
    const data = await response.json();
    return data;
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId) => {
    const response = await fetch(`${apiEndpoint}/${contactId}`, {
        method: 'DELETE',
    });
    const data = await response.json();
    return data;
});
