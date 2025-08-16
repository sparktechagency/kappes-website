import { api } from "../baseApi";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPopularCategory: builder.query({
      query: () => {
        return {
          url: `/category?sort=-ctgViewCount`,
          method: "GET",
        };
      },
    }),
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
  useGetPopularCategoryQuery,
  useGetRecommendedProductsQuery,
  useGetTrendingProductsQuery,
  useUpdateProductMutation,
} = productApi;
