import { configureStore } from "@reduxjs/toolkit";
import someSlice from "./features/someSlice";
import filterSlice from "./features/filterSlice";
import cartSlice from "./features/cartSlice";
import productSlice from "./features/productSlice";
import chatSlice from "./features/chatSlice";
import { chatMiddleware } from "./middleware/chatMiddleWare";
import { api } from "./redux/baseApi";
import authSlice from "./features/authSlice/authSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["auth"], // only auth will be persisted
};

const persistedAuthReducer = persistReducer(persistConfig, authSlice);

export const store = configureStore({
  reducer: {
    some: someSlice,
    filter: filterSlice,
    cart: cartSlice,
    product: productSlice,
    chat: chatSlice,
    [api.reducerPath]: api.reducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types for serializable check
        ignoredActions: [
          "chat/receiveMessage",
          "chat/sendMessage",
          "persist/PERSIST",
          "persist/REHYDRATE",
        ],
      },
    })
      .concat(chatMiddleware)
      .concat(api.middleware), // add chat middleware
});

export const persistor = persistStore(store);
