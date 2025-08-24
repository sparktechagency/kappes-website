import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "next/navigation";
import {
  useGetBusinessListQuery,
  useSendMessageMutation,
} from "@/redux/servicesApi/servicsApi";
import {
  setServices,
  selectService,
  clearSelectedService,
  setLoading,
  setError,
} from "@/features/servieSlice/serviceSlice";

const useService = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  // Get state from Redux
  const { services, selectedService, isLoading, error, meta } = useSelector(
    (state) => state.service
  );

  // Fetch services query
  const {
    data: servicesData,
    error: apiError,
    isLoading: apiLoading,
    refetch,
  } = useGetBusinessListQuery();

  // Effect to handle services data
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

  // Effect to select service when ID changes or services are loaded
  useEffect(() => {
    if (id && services.length > 0) {
      dispatch(selectService(id));
    } else {
      dispatch(clearSelectedService());
    }
  }, [id, services, dispatch]);

  const [sendMessage, { isLoading: isSending, error: sendError }] =
    useSendMessageMutation();

  const handleSendMessage = async (data) => {
    // Ensure serviceId is provided
    if (!data.serviceId) {
      throw new Error("Service ID is required to send a message");
    }

    try {
      const response = await sendMessage({
        data: {
          message: data.message,
          senderName: data.senderName,
          senderEmail: data.senderEmail,
        },
        businessId: data.serviceId, // Note: API still expects businessId
      }).unwrap();

      return response;
    } catch (error) {
      console.error("Error sending message:", error);
      throw error;
    }
  };

  return {
    // Raw services list
    services,

    // Selected service details
    selectedService,

    // Loading and error states
    isLoading,
    error: error || apiError,

    // Metadata
    meta,

    // Utility functions
    refetch,

    // Convenience checks
    hasServices: services.length > 0,
    isServiceSelected: !!selectedService,

    // Send message
    sendMessage,
    isSending,
    sendError,
    handleSendMessage,
  };
};

export default useService;
