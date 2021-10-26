import { createSlice } from "@reduxjs/toolkit";
   
  const sliceOptions = {
    name: "isChecked",
    initialState: {
      checked: [false, false, false, false, false, false, false, false, false, false],
      count: 0
    },
    reducers: {
        changeCheck: (state, action) => {
            state.checked[action.payload] = !state.checked[action.payload];
            
        },
        incrementCount: (state) => {
            state.count += 1;
        },
        decrementCount: (state) => {
            state.count -= 1;
        },
    },
  }
  
  export const isCheckedSlice = createSlice(sliceOptions);
  
  export const selectChecked = (state) => state.isChecked.checked;
  export const selectCount = (state) => state.isChecked.count;
  
  export const {changeCheck, incrementCount, decrementCount} = isCheckedSlice.actions;

  export const isCheckedReducer = isCheckedSlice.reducer;