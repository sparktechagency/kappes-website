import { api } from "../baseApi";

const userprofileApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: () => {
        return {
          url: `/users/profile`,
          method: "GET",
        };
      },
    }),
    updateUserProfile: builder.mutation({
      query: ({ data }) => {
        return {
          url: "/users/profile",
          method: "PATCH",
          body: data,
        };
      },
    }),
  }),
  overrideExisting: true,
});

export const { useGetUserProfileQuery, useUpdateUserProfileMutation } =
  userprofileApi;
