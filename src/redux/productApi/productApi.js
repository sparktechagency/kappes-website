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
      transformResponse: (response) => {
        return response;
      },
    }),
    getRelatedProducts: builder.query({
      query: (categoryId) => {
        return {
          url: `/product/category/${categoryId}`,
          method: "GET",
        };
      },
      transformResponse: (response) => {
        return response;
      },
    }),
    getTrendingProducts: builder.query({
      query: (params) => {
        const { page = 1, limit = 10, ...queryParams } = params || {};
        return {
          url: `/product`,
          method: "GET",
          params: {
            sort: "-purchaseCount",
            page,
            limit,
            ...queryParams,
          },
        };
      },
      transformResponse: (response) => {
        return response;
      },
    }),
    getAllProducts: builder.query({
      query: (params) => {
        const { id, page = 1, limit = 10, ...queryParams } = params || {};

        // If id is provided, get a specific product
        if (id) {
          return {
            url: `/product/${id}`,
            method: "GET",
          };
        }

        // Otherwise get all products with pagination
        return {
          url: `/product`,
          method: "GET",
          params: {
            page,
            limit,
            ...queryParams,
          },
        };
      },
      transformResponse: (response) => {
        return response;
      },
    }),
    getFeaturedProducts: builder.query({
      query: (params) => {
        const { page = 1, limit = 10 } = params || {};
        return {
          url: `/product`,
          method: "GET",
          params: {
            isFeatured: true,
            page,
            limit,
          },
        };
      },
      transformResponse: (response) => {
        return response;
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
    getReviewByProductId: builder.query({
      query: (productId) => {
        return {
          url: `/review/product/${productId}`,
          method: "GET",
        };
      },
    }),
    getShopProducts: builder.query({
      query: (params) => {
        const { page = 1, limit = 10, ...queryParams } = params || {};
        return {
          url: `/product`,
          method: "GET",
          params: {
            page,
            limit,
            ...queryParams,
          },
        };
      },
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetPopularCategoryQuery,
  useGetRecommendedProductsQuery,
  // useGetRelatedProductsQuery, // Commented out to avoid duplicate declaration
  useGetTrendingProductsQuery,
  useGetAllProductsQuery,
  useGetFeaturedProductsQuery,
  useUpdateProductMutation,
  useGetReviewByProductIdQuery,
  useGetShopProductsQuery,
} = productApi;

// Export directly to ensure it's available
export const useGetRelatedProductsQuery =
  productApi.endpoints.getRelatedProducts.useQuery;
