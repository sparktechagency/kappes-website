import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addFav: (state, action) => {
      console.log("addFav reducer called with:", action.payload);
      const { id } = action.payload;
      const index = state.findIndex((item) => item.id === id);

      if (index === -1) {
        state.push(action.payload); // Store full product
        console.log("Product added to favorites. New state:", state);
      } else {
        console.log("Product already in favorites");
      }
    },
    removeFav: (state, action) => {
      console.log("removeFav reducer called with ID:", action.payload);
      const newState = state.filter((item) => item.id !== action.payload);
      console.log("Product removed from favorites. New state:", newState);
      return newState;
    },
    showFav: (state) => state, // fixed here
    isFav: (state, action) => {
      return state.some((item) => item.id === action.payload);
    },
  },
});

export const { addFav, removeFav, showFav, isFav } = productSlice.actions;
export default productSlice.reducer;
