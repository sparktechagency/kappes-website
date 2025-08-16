import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommendedProducts: [],
  trendingProducts: [],
  allProducts: [],
  featuredProducts: [],
  isLoading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Recommended Products Actions
    setRecommendedProducts: (state, action) => {
      state.recommendedProducts = action.payload || [];
    },
    addRecommendedProduct: (state, action) => {
      state.recommendedProducts.push(action.payload);
    },
    clearRecommendedProducts: (state) => {
      state.recommendedProducts = [];
    },

    // Trending Products Actions
    setTrendingProducts: (state, action) => {
      state.trendingProducts = action.payload || [];
    },

    // All Products Actions
    setAllProducts: (state, action) => {
      state.allProducts = action.payload || [];
    },
    addProduct: (state, action) => {
      state.allProducts.push(action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.allProducts.findIndex(
        (product) => product._id === action.payload._id
      );
      if (index !== -1) {
        state.allProducts[index] = {
          ...state.allProducts[index],
          ...action.payload,
        };
      }
    },
    removeProduct: (state, action) => {
      state.allProducts = state.allProducts.filter(
        (product) => product._id !== action.payload
      );
    },

    // Featured Products Actions
    setFeaturedProducts: (state, action) => {
      state.featuredProducts = action.payload || [];
    },

    // Loading and Error States
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },

    // Product Interaction Actions
    incrementViewCount: (state, action) => {
      const productId = action.payload;
      // Update in recommended products
      const recommendedIndex = state.recommendedProducts.findIndex(
        (product) => product._id === productId
      );
      if (recommendedIndex !== -1) {
        state.recommendedProducts[recommendedIndex].viewCount += 1;
      }
      // Update in all products
      const allProductsIndex = state.allProducts.findIndex(
        (product) => product._id === productId
      );
      if (allProductsIndex !== -1) {
        state.allProducts[allProductsIndex].viewCount += 1;
      }
    },

    incrementPurchaseCount: (state, action) => {
      const productId = action.payload;
      // Update in recommended products
      const recommendedIndex = state.recommendedProducts.findIndex(
        (product) => product._id === productId
      );
      if (recommendedIndex !== -1) {
        state.recommendedProducts[recommendedIndex].purchaseCount += 1;
      }
      // Update in all products
      const allProductsIndex = state.allProducts.findIndex(
        (product) => product._id === productId
      );
      if (allProductsIndex !== -1) {
        state.allProducts[allProductsIndex].purchaseCount += 1;
      }
    },
  },
});

// Selectors
export const selectRecommendedProducts = (state) =>
  state.products.recommendedProducts;
export const selectAllProducts = (state) => state.products.allProducts;
export const selectTrendingProducts = (state) =>
  state.products.trendingProducts;
export const selectFeaturedProducts = (state) =>
  state.products.featuredProducts;
export const selectProductsLoading = (state) => state.products.isLoading;
export const selectProductsError = (state) => state.products.error;

// Get product by ID selector
export const selectProductById = (productId) => (state) => {
  return (
    state.products.allProducts.find((product) => product._id === productId) ||
    state.products.recommendedProducts.find(
      (product) => product._id === productId
    )
  );
};

// Get products by category selector
export const selectProductsByCategory = (categoryId) => (state) => {
  return state.products.allProducts.filter(
    (product) => product.categoryId?._id === categoryId
  );
};

export const {
  setRecommendedProducts,
  addRecommendedProduct,
  clearRecommendedProducts,
  setTrendingProducts,
  setAllProducts,
  addProduct,
  updateProduct,
  removeProduct,
  setFeaturedProducts,
  setLoading,
  setError,
  clearError,
  incrementViewCount,
  incrementPurchaseCount,
} = productSlice.actions;

export default productSlice.reducer;
