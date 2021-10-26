import { configureStore } from '@reduxjs/toolkit';
import { allUsersReducer } from '../features/usersFetch';
import { isCheckedReducer } from '../features/userSlice';

export const store = configureStore({
  reducer: {
    allUsers: allUsersReducer,
    isChecked: isCheckedReducer
  },
});
