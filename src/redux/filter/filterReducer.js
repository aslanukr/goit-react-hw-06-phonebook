import { setFilter } from 'redux/types';
import { initialState } from './initialState';
import { createReducer } from '@reduxjs/toolkit';

export const filterReducer = createReducer(initialState.filter, builder => {
  builder.addCase(setFilter, (state, action) => {
    return action.payload;
  });
});
