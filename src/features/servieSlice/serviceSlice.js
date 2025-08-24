import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  services: [],
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
        state.services[index] = { ...state.services[index], ...action.payload };
      }
    },

    // Remove a service by ID
    removeService: (state, action) => {
      state.services = state.services.filter(
        (service) => service._id !== action.payload
      );
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
  return state.services.services.find((service) => service._id === serviceId);
};

// Get services by type or service category
export const selectServicesByType = (serviceType) => (state) => {
  return state.services.services.filter(
    (service) => service.type === serviceType || service.service === serviceType
  );
};

export const {
  setServices,
  addService,
  updateService,
  removeService,
  setLoading,
  setError,
  clearError,
} = serviceSlice.actions;

export default serviceSlice.reducer;
