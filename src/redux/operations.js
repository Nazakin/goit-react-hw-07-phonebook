import { createAsyncThunk } from "@reduxjs/toolkit";

// Base URL for the API
const apiBaseURL = "https://connections-api.herokuapp.com";

// User Endpoints
const signupEndpoint = `${apiBaseURL}/users/signup`;
const loginEndpoint = `${apiBaseURL}/users/login`;
const logoutEndpoint = `${apiBaseURL}/users/logout`;
const currentUserEndpoint = `${apiBaseURL}/users/current`;

export const registerUser = createAsyncThunk('auth/registerUser', async (userData) => {
    const response = await fetch(signupEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data;
});

// Operation for user login
export const loginUser = createAsyncThunk('auth/loginUser', async (userData) => {
    const response = await fetch(loginEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data;
});

// Operation for user logout
export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
    const response = await fetch(logoutEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data;
});

// Operation to get information about the current user
export const fetchCurrentUser = createAsyncThunk('auth/fetchCurrentUser', async () => {
    const response = await fetch(currentUserEndpoint, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data;
});

// Contact Endpoints
const contactsEndpoint = `${apiBaseURL}/contacts`;

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
    const response = await fetch(contactsEndpoint);
    const data = await response.json();
    return data;
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact) => {
    const response = await fetch(contactsEndpoint, {
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
    const response = await fetch(`${contactsEndpoint}/${contactId}`, {
        method: 'DELETE',
    });
    const data = await response.json();
    return data;
});
