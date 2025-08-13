import { configureStore } from "@reduxjs/toolkit";
import someSlice from "./features/someSlice";
import filterSlice from "./features/filterSlice";
import cartSlice from "./features/cartSlice";
import productSlice from "./features/productSlice";
import chatSlice from "./features/chatSlice";
import { chatMiddleware } from "./middleware/chatMiddleWare";
import { api } from "./redux/baseApi";
export const store = configureStore({
  reducer: {
    some: someSlice,
    filter: filterSlice,
    cart: cartSlice,
    product: productSlice,
    chat: chatSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types for serializable check
        ignoredActions: ["chat/receiveMessage", "chat/sendMessage"],
      },
    })
      .concat(chatMiddleware)
      .concat(api.middleware), // add chat middleware
});
