import { useEffect, useState, useMemo, useCallback } from "react";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import {
  setLoading,
  setError,
  clearError,
} from "@/features/productSlice/productsSlice";
import { useGetAllProductsQuery } from "@/redux/productApi/productApi";
import {
  findBestMatchingVariant,
  getAvailableVariantSpecs,
} from "@/utils/productUtils";

const useProductDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [productId, setProductId] = useState(null);
  const [productDetails, setProductDetails] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);

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
      const product =
        productData.data?.result?.[0] || productData.data || productData;

      if (product) {
        setProductDetails(product);

        // Set initial selected variant if variants exist
        if (
          product.product_variant_Details &&
          product.product_variant_Details.length > 0
        ) {
          setSelectedVariant(product.product_variant_Details[0]);
        }
      }
    }
  }, [productData]);

  // Memoized variant by specifications
  const getVariantBySpecs = useCallback(
    (specs) => {
      if (!productDetails?.product_variant_Details) return null;

      return findBestMatchingVariant(productDetails, specs);
    },
    [productDetails]
  );

  // Memoized available variants
  const getAvailableVariants = useMemo(() => {
    if (!productDetails?.product_variant_Details) return {};
    return getAvailableVariantSpecs(productDetails);
  }, [productDetails]);

  return {
    productDetails,
    selectedVariant,
    setSelectedVariant,
    getVariantBySpecs,
    getAvailableVariants,
    isLoading: apiLoading,
    error: apiError,
    refetch,
    productId,
  };
};

export default useProductDetails;
