import { configureStore } from "@reduxjs/toolkit";
import someSlice from "./features/someSlice";
import filterSlice from "./features/filterSlice";
import cartSlice from "./features/cartSlice";
import productSlice from "./features/productSlice";

export const store = configureStore({
  reducer: {
    some: someSlice,
    filter: filterSlice,
    cart: cartSlice,
    product: productSlice,
  },
});
