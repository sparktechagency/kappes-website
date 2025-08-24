import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetBusinessListQuery } from "@/redux/servicesApi/servicsApi";
import {
  setServices,
  setLoading,
  setError,
} from "@/features/servieSlice/serviceSlice";

const useService = () => {
  const dispatch = useDispatch();
  const { services, isLoading, error, meta } = useSelector(
    (state) => state.service
  );

  const {
    data: servicesData,
    error: apiError,
    isLoading: apiLoading,
    refetch,
  } = useGetBusinessListQuery();

  useEffect(() => {
    // Set loading state
    dispatch(setLoading(apiLoading));

    // Handle API errors
    if (apiError) {
      dispatch(setError(apiError.message || "Failed to fetch services"));
    }

    // Process successful data response
    if (servicesData && servicesData.success) {
      try {
        // Dispatch the entire response data to the reducer
        dispatch(setServices(servicesData.data));
      } catch (error) {
        dispatch(setError("Error processing services data"));
        console.error("Services data processing error:", error);
      }
    }
  }, [servicesData, apiError, apiLoading, dispatch]);

  return {
    services,
    isLoading,
    error: error || apiError,
    refetch,
    meta,
    hasServices: services.length > 0,
  };
};

export default useService;
