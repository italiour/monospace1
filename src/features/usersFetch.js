import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const usersFetch = createAsyncThunk(
    "allUsers/fetchAllUsers",
    async () => {
      const data = await fetch("http://ion.users.challenge.dev.monospacelabs.com/users");
      const json = await data.json();
      return json;
    }
  );

  const sliceOptions = {
    name: "allUsers",
    initialState: {
      users: [],
      isLoading: false,
      hasError: false
    },
    reducers: {},
    extraReducers: {
      [usersFetch.pending]: (state, action) => {
        state.isLoading = true;
        state.hasError = false;
      },
      [usersFetch.fulfilled]: (state, action) => {
        state.users = action.payload;
        state.isLoading = false;
        state.hasError = false;
      },
      [usersFetch.rejected]: (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      }
    }
  }


  
  export const allUsersSlice = createSlice(sliceOptions);
  
  export const selectUsers = (state) => state.allUsers.users;
  
  export const allUsersReducer = allUsersSlice.reducer;