import { configureStore } from "@reduxjs/toolkit";
import someSlice from "./features/someSlice";

export const store = configureStore({
  reducer: {
    some: someSlice,
  },
});
