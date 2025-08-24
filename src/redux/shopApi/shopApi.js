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
    getProductsByShop: builder.query({
      query: (shopId) => {
        return {
          url: `/shop/products/${shopId}`,
          method: "GET",
        };
      },
    }),
  }),
  overrideExisting: true,
});

export const { useGetShopListQuery, useGetProductsByShopQuery } = shopApi;
