import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  selectTrendingProducts,
  selectProductsLoading,
  selectProductsError,
  setTrendingProducts,
  setLoading,
  setError,
  clearError,
} from "@/features/productSlice/productsSlice";
import { useGetTrendingProductsQuery } from "@/redux/productApi/productApi";

const useTrendingProducts = () => {
  const dispatch = useDispatch();
  const trendingProducts = useSelector(selectTrendingProducts);
  const isLoading = useSelector(selectProductsLoading);
  const error = useSelector(selectProductsError);

  const {
    data: trendingProductsData,
    error: apiError,
    isLoading: apiLoading,
    refetch,
  } = useGetTrendingProductsQuery();

  useEffect(() => {
    // Set loading state
    dispatch(setLoading(apiLoading));
  }, [apiLoading, dispatch]);

  useEffect(() => {
    // Handle API error
    if (apiError) {
      dispatch(
        setError(apiError.message || "Failed to fetch trending products")
      );
    } else {
      dispatch(clearError());
    }
  }, [apiError, dispatch]);

  useEffect(() => {
    // Set trending products data
    // Debug logs (remove in production)
    // console.log("🔍 Data processing useEffect triggered:");
    // console.log("trendingProductsData:", trendingProductsData);

    if (trendingProductsData) {
      let productsToSet = null;

      // Try different possible response structures
      if (
        trendingProductsData?.data?.products &&
        Array.isArray(trendingProductsData.data.products)
      ) {
        productsToSet = trendingProductsData.data.products;
      } else if (
        trendingProductsData?.data?.data &&
        Array.isArray(trendingProductsData.data.data)
      ) {
        productsToSet = trendingProductsData.data.data;
      } else if (
        trendingProductsData?.data &&
        Array.isArray(trendingProductsData.data)
      ) {
        productsToSet = trendingProductsData.data;
      } else if (
        trendingProductsData?.products &&
        Array.isArray(trendingProductsData.products)
      ) {
        productsToSet = trendingProductsData.products;
      } else if (
        trendingProductsData?.result &&
        Array.isArray(trendingProductsData.result)
      ) {
        productsToSet = trendingProductsData.result;
      } else if (Array.isArray(trendingProductsData)) {
        productsToSet = trendingProductsData;
      } else {
        // Try to find any array property in the response
        const keys = Object.keys(trendingProductsData);
        for (const key of keys) {
          if (Array.isArray(trendingProductsData[key])) {
            productsToSet = trendingProductsData[key];
            break;
          }
          // Check nested properties inside each key
          if (
            typeof trendingProductsData[key] === "object" &&
            trendingProductsData[key] !== null
          ) {
            const nestedKeys = Object.keys(trendingProductsData[key]);
            for (const nestedKey of nestedKeys) {
              if (Array.isArray(trendingProductsData[key][nestedKey])) {
                productsToSet = trendingProductsData[key][nestedKey];
                break;
              }
            }
            if (productsToSet) break;
          }
        }
      }

      if (productsToSet) {
        dispatch(setTrendingProducts(productsToSet));
      }
    }
  }, [trendingProductsData, dispatch]);

  return {
    trendingProducts,
    isLoading,
    error,
    refetch,
    hasProducts: trendingProducts.length > 0,
  };
};

export default useTrendingProducts;
