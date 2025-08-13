import { api } from "../baseApi";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (loginCredentials) => {
        return {
          url: `/auth/login`,
          method: "POST",
          body: loginCredentials,
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),
    register: builder.mutation({
      query: (registerData) => {
        return {
          url: "/users",
          method: "POST",
          body: registerData,
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),
    verifyEmail: builder.mutation({
      query: (verifyEmailData) => {
        return {
          url: "/auth/verify-email",
          method: "POST",
          body: verifyEmailData,
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useVerifyEmailMutation } =
  authApi;
