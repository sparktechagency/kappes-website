import { api } from "../baseApi";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getRecommendedProducts: builder.query({
      query: () => {
        return {
          url: `/product/recommended`,
          method: "GET",
        };
      },
    }),
    getTrendingProducts: builder.query({
      query: () => {
        return {
          url: `/product/?sort=-purchaseCount`,
          method: "GET",
        };
      },
    }),
    updateProduct: builder.mutation({
      query: ({ data }) => {
        return {
          url: "/product",
          method: "PATCH",
          body: data,
        };
      },
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetRecommendedProductsQuery,
  useGetTrendingProductsQuery,
  useUpdateProductMutation,
} = productApi;
