"use client";
import { useState, useEffect } from "react";
import { useGetProductsByShopQuery } from "@/redux/shopApi/shopApi";

export function useStoreShop(shopId) {
  // State for managing products and UI states
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    total: 0,
    limit: 10,
    page: 1,
    totalPage: 1,
  });

  // Use the API query hook
  const {
    data: apiResponse,
    isLoading: queryLoading,
    error: queryError,
  } = useGetProductsByShopQuery(shopId, {
    // Only fetch if shopId is provided
    skip: !shopId,
  });

  // Effect to handle API response
  useEffect(() => {
    if (apiResponse?.success) {
      // Set products from API response
      const fetchedProducts = apiResponse.data?.products || [];
      setProducts(fetchedProducts);

      // Update pagination info
      if (apiResponse.data?.meta) {
        setPagination(apiResponse.data.meta);
      }

      setIsLoading(false);
    } else if (apiResponse?.success === false) {
      // Handle specific error scenarios
      const errorMessage =
        apiResponse.message || "No products found for this shop";
      setError({
        message: errorMessage,
        statusCode: apiResponse.statusCode || 404,
      });
      setProducts([]);
      setIsLoading(false);
    }
  }, [apiResponse]);

  // Effect to handle loading and error states
  useEffect(() => {
    setIsLoading(queryLoading);

    if (queryError) {
      // Transform query error into a more user-friendly format
      setError({
        message:
          queryError.data?.message ||
          "An error occurred while fetching products",
        statusCode: queryError.status || 500,
      });
      setProducts([]);
      setIsLoading(false);
    }
  }, [queryLoading, queryError]);

  // Helper function to get lowest product price
  const getProductPrice = (product) => {
    if (!product) return 0;

    if (
      product.product_variant_Details &&
      product.product_variant_Details.length > 0
    ) {
      const variantPrices = product.product_variant_Details.map(
        (variant) => variant.variantPrice
      );
      return Math.min(...variantPrices, product.basePrice);
    }

    return product.basePrice;
  };

  // Helper function to check if product has a discounted price
  const hasDiscountedPrice = (product) => {
    if (!product || !product.product_variant_Details) return false;

    return product.product_variant_Details.some(
      (variant) => variant.variantPrice < product.basePrice
    );
  };

  // Favorite toggle function (you might want to implement this with Redux)
  const toggleFavorite = (product, e) => {
    e.stopPropagation();
    e.preventDefault();
    // Implement favorite logic
    console.log("Toggle favorite", product);
  };

  return {
    products,
    isLoading,
    error,
    pagination,
    getProductPrice,
    hasDiscountedPrice,
    toggleFavorite,
  };
}
