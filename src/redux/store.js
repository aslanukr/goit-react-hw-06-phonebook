import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filter/filterReducer';
import { contactsReducer } from './contacts/contactsReducer';

const store = configureStore({
  reducer: {
    filter: filterReducer,
    contacts: contactsReducer,
  },
});

export default store;
