import { configureStore } from '@reduxjs/toolkit';
import { allUsersReducer } from '../features/usersFetch'

export const store = configureStore({
  reducer: {
    allUsers: allUsersReducer,

  },
});
