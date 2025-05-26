import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        // If item exists, just increase quantity by 1 (or specified amount)
        existingItem.quantity += action.payload.quantity || 1;
      } else {
        // If item doesn't exist, add it to cart with quantity 1 (or specified amount)
        state.push({
          ...action.payload,
          quantity: action.payload.quantity || 1,
        });
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    // Fixed totalItem function - returns total number of unique items in cart
    totalItem: (state) => {
      return state.length;
    },
    // Alternative: if you want total quantity of all items
    totalQuantity: (state) => {
      return state.reduce((total, item) => total + item.quantity, 0);
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    clear: () => {
      return [];
    },
  },
});

export const {
  addCart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clear,
  totalItem,
  totalQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
export const selectCartItems = (state) => state.cart;
export const selectTotalItemCount = (state) => state.cart.length;
export const selectTotalQuantity = (state) =>
  state.cart.reduce((total, item) => total + item.quantity, 0);
