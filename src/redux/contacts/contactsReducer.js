import { addContact, deleteContact } from 'redux/types';
import { initialState } from './initialState';
import { createReducer } from '@reduxjs/toolkit';

export const contactsReducer = createReducer(initialState.contacts, builder => {
  builder
    .addCase(addContact, (state, action) => {
      state.push(action.payload);
    })
    .addCase(deleteContact, (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    });
});
