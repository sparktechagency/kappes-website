import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  services: [],
  selectedService: null,
  isLoading: false,
  error: null,
  meta: {
    total: 0,
    limit: 10,
    page: 1,
    totalPage: 0,
  },
};

const serviceSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    // Set services with full response data
    setServices: (state, action) => {
      state.services = action.payload?.businesses || [];
      state.meta = action.payload?.meta || state.meta;
    },

    // Select a specific service by ID
    selectService: (state, action) => {
      state.selectedService =
        state.services.find((service) => service._id === action.payload) ||
        null;
    },

    // Clear selected service
    clearSelectedService: (state) => {
      state.selectedService = null;
    },

    // Add a new service
    addService: (state, action) => {
      state.services.push(action.payload);
    },

    // Update a specific service by ID
    updateService: (state, action) => {
      const index = state.services.findIndex(
        (service) => service._id === action.payload._id
      );
      if (index !== -1) {
        state.services[index] = {
          ...state.services[index],
          ...action.payload,
        };

        // If updating the currently selected service
        if (state.selectedService?._id === action.payload._id) {
          state.selectedService = {
            ...state.selectedService,
            ...action.payload,
          };
        }
      }
    },

    // Remove a service by ID
    removeService: (state, action) => {
      state.services = state.services.filter(
        (service) => service._id !== action.payload
      );

      // Clear selected service if it was the removed one
      if (state.selectedService?._id === action.payload) {
        state.selectedService = null;
      }
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
  },
});

// Selectors
// Get service by ID
export const selectServiceById = (serviceId) => (state) => {
  return state.service.services.find((service) => service._id === serviceId);
};

// Get services by type or service category
export const selectServicesByType = (serviceType) => (state) => {
  return state.service.services.filter(
    (service) => service.type === serviceType || service.service === serviceType
  );
};

// Selector for contact information
export const selectServiceContactInfo = (state) => {
  const service = state.service.selectedService;
  return service
    ? {
        id: service._id,
        email: service.email || "N/A",
        phone: service.phone || "N/A",
        address: service.address?.detail_address || "N/A",
        website: service.website || "N/A",
        facebook: service.facebook || "N/A",
        instagram: service.instagram || "N/A",
        youtube: service.youtube || "N/A",
        workingHours: service.working_hours || [],
      }
    : null;
};

// Selector for business hours
export const selectServiceWorkingHours = (state) => {
  const service = state.service.selectedService;
  return service?.working_hours || [];
};

export const {
  setServices,
  selectService,
  clearSelectedService,
  addService,
  updateService,
  removeService,
  setLoading,
  setError,
  clearError,
} = serviceSlice.actions;

export default serviceSlice.reducer;
