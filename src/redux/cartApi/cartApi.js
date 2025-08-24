import { api } from "../baseApi";

const cartApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getMyCart: builder.query({
      query: () => {
        return {
          url: `/cart`,
          method: "GET",
        };
      },
    }),
    updateMyCart: builder.mutation({
      query: ({ data }) => {
        return {
          url: "/cart",
          method: "PATCH",
          body: data,
        };
      },
    }),
  }),
  overrideExisting: true,
});

export const { useGetMyCartQuery, useUpdateMyCartMutation } = cartApi;
