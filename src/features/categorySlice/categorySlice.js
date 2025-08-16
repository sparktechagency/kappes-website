import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    getCategories: (state) => {
      return state.categories;
    },
  },
});
export const { setCategories, getCategories } = categorySlice.actions;

export default categorySlice.reducer;
