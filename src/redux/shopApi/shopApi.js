import { api } from "../baseApi";

const shopApi = api.injectEndpoints({
  endpoints: (builder) => ({
    //shop-by-store page
    getShopList: builder.query({
      query: (params) => {
        return {
          url: `/shop`,
          method: "GET",
          params: {
            fields: params.fields,
          },
        };
      },
    }),
  }),
  overrideExisting: true,
});

export const { useGetShopListQuery } = shopApi;
