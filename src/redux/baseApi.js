import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseUrl } from "./baseUrl";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: getBaseUrl(),
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken");
      const verifyToken = localStorage.getItem("verifyToken");
      if (verifyToken) {
        headers.set("resettoken", verifyToken);
      }
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ["PRODUCT", "CATEGORY", "BRAND", "USER", "CART", "ORDER"],
});

export const imageUrl = getBaseUrl();
