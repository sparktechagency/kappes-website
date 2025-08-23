import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import {
  setLoading,
  setError,
  clearError,
} from "@/features/productSlice/productsSlice";
import { useGetAllProductsQuery } from "@/redux/productApi/productApi";

const useProductDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [productId, setProductId] = useState(null);
  const [productDetails, setProductDetails] = useState(null);

  // Extract product ID from URL params
  useEffect(() => {
    if (params?.id) {
      setProductId(params.id);
    }
  }, [params]);

  // Fetch product data using the API
  const {
    data: productData,
    error: apiError,
    isLoading: apiLoading,
    refetch,
  } = useGetAllProductsQuery({ id: productId }, { skip: !productId });

  // Set loading state
  useEffect(() => {
    dispatch(setLoading(apiLoading));
  }, [apiLoading, dispatch]);

  // Handle API errors
  useEffect(() => {
    if (apiError) {
      dispatch(setError(apiError.message || "Failed to fetch product details"));
    } else {
      dispatch(clearError());
    }
  }, [apiError, dispatch]);

  // Process product data when it arrives
  useEffect(() => {
    if (productData) {
      console.log("Product data received:", productData);

      // Extract product details from response
      if (productData.data) {
        if (
          Array.isArray(productData.data.result) &&
          productData.data.result.length > 0
        ) {
          // If result is an array, take the first item
          setProductDetails(productData.data.result[0]);
        } else if (typeof productData.data === "object") {
          // Direct product object
          setProductDetails(productData.data);
        }
      } else if (typeof productData === "object") {
        setProductDetails(productData);
      }
    }
  }, [productData]);

  return {
    productDetails,
    isLoading: apiLoading,
    error: apiError,
    refetch,
    productId,
  };
};

export default useProductDetails;
