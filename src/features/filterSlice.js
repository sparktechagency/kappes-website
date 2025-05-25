import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collapse: false,
  selectedCategory: [],
  priceRangeLow: 0,
  priceRangeHigh: 500,
  location: { territory: null, province: null, city: null },
};
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterOpen: (state, action) => {
      state.collapse = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setPriceRange: (state, action) => {
      const { low, high } = action.payload;
      state.priceRangeLow = low;
      state.priceRangeHigh = high;
    },
    setLocation: (state, action) => {
      const { territory, province, city } = action.payload;
      state.location = { territory, province, city };
    },
    resetFilters: () => initialState,
  },
});

export const {
  filterOpen,
  setSelectedCategory,
  setPriceRange,
  setLocation,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
