import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://662e1977a7dda1fa378c0d04.mockapi.io/contactsaa";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact) => {
    const response = await axios.post(API_URL, contact);
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId) => {
    await axios.delete(`${API_URL}/${contactId}`);
    return contactId;
  }
);
