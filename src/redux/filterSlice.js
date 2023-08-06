import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterComments: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { filterComments } = filterSlice.actions;

export default filterSlice.reducer;

//Selectors

export const getFilter = (state) => state.filter.filter;
