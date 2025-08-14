import { useEffect } from "react";
import { useGetRecommendedProductsQuery } from "@/redux/productApi/productApi";
import { useSelector, useDispatch } from "react-redux";
import {
  selectRecommendedProducts,
  selectProductsLoading,
  selectProductsError,
  setRecommendedProducts,
  setLoading,
  setError,
  clearError,
} from "@/features/productSlice/productsSlice";

const useRecommendedProducts = () => {
  const dispatch = useDispatch();
  const recommendedProducts = useSelector(selectRecommendedProducts);
  const isLoading = useSelector(selectProductsLoading);
  const error = useSelector(selectProductsError);

  const {
    data: recommendedProductsData,
    error: apiError,
    isLoading: apiLoading,
    refetch,
  } = useGetRecommendedProductsQuery();

  useEffect(() => {
    // Set loading state
    dispatch(setLoading(apiLoading));
  }, [apiLoading, dispatch]);

  useEffect(() => {
    // Handle API error
    if (apiError) {
      dispatch(
        setError(apiError.message || "Failed to fetch recommended products")
      );
    } else {
      dispatch(clearError());
    }
  }, [apiError, dispatch]);

  useEffect(() => {
    // Set recommended products data
    // Debug logs (remove in production)
    // console.log("🔍 Data processing useEffect triggered:");
    // console.log("recommendedProductsData:", recommendedProductsData);

    if (recommendedProductsData) {
      let productsToSet = null;

      // Try different possible response structures
      if (
        recommendedProductsData?.data?.products &&
        Array.isArray(recommendedProductsData.data.products)
      ) {
        productsToSet = recommendedProductsData.data.products;
      } else if (
        recommendedProductsData?.data?.data &&
        Array.isArray(recommendedProductsData.data.data)
      ) {
        productsToSet = recommendedProductsData.data.data;
      } else if (
        recommendedProductsData?.data &&
        Array.isArray(recommendedProductsData.data)
      ) {
        productsToSet = recommendedProductsData.data;
      } else if (
        recommendedProductsData?.products &&
        Array.isArray(recommendedProductsData.products)
      ) {
        productsToSet = recommendedProductsData.products;
      } else if (
        recommendedProductsData?.result &&
        Array.isArray(recommendedProductsData.result)
      ) {
        productsToSet = recommendedProductsData.result;
      } else if (Array.isArray(recommendedProductsData)) {
        productsToSet = recommendedProductsData;
      } else {
        // Try to find any array property in the response
        const keys = Object.keys(recommendedProductsData);
        for (const key of keys) {
          if (Array.isArray(recommendedProductsData[key])) {
            productsToSet = recommendedProductsData[key];
            break;
          }
          // Check nested properties inside each key
          if (
            typeof recommendedProductsData[key] === "object" &&
            recommendedProductsData[key] !== null
          ) {
            const nestedKeys = Object.keys(recommendedProductsData[key]);
            for (const nestedKey of nestedKeys) {
              if (Array.isArray(recommendedProductsData[key][nestedKey])) {
                productsToSet = recommendedProductsData[key][nestedKey];
                break;
              }
            }
            if (productsToSet) break;
          }
        }
      }

      if (productsToSet) {
        dispatch(setRecommendedProducts(productsToSet));
      }
    }
  }, [recommendedProductsData, dispatch]);

  return {
    recommendedProducts,
    isLoading,
    error,
    refetch,
    hasProducts: recommendedProducts.length > 0,
  };
};

export default useRecommendedProducts;
