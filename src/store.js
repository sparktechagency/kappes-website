import { configureStore } from "@reduxjs/toolkit";
import someSlice from "./features/someSlice";
import filterSlice from "./features/filterSlice";
import cartSlice from "./features/cartSlice";
import productSlice from "./features/productSlice";
import productsSlice from "./features/productSlice/productsSlice";
import chatSlice from "./features/chatSlice";
import { chatMiddleware } from "./middleware/chatMiddleWare";
import { api } from "./redux/baseApi";
import authSlice from "./features/authSlice/authSlice";
import userSlice from "./features/userSlice/userSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import categorySlice from "./features/categorySlice/categorySlice";
import serviceSlice from "./features/servieSlice/serviceSlice";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["auth"], // only auth will be persisted
};

const userPersistConfig = {
  key: "user",
  storage,
  whitelist: ["user"], // only user will be persisted
};

const persistedAuthReducer = persistReducer(persistConfig, authSlice);
const persistedUserReducer = persistReducer(userPersistConfig, userSlice);

export const store = configureStore({
  reducer: {
    some: someSlice,
    filter: filterSlice,
    cart: cartSlice,
    product: productSlice,
    products: productsSlice,
    chat: chatSlice,
    category: categorySlice,
    service: serviceSlice,
    [api.reducerPath]: api.reducer,
    auth: persistedAuthReducer,
    user: persistedUserReducer,
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
