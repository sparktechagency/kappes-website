import { api } from "../baseApi";

const servicesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    //shop-by-store page
    getBusinessList: builder.query({
      query: () => {
        return {
          url: `/business/all`,
          method: "GET",
        };
      },
    }),
    getBusinessById: builder.query({
      query: (businessId) => {
        return {
          url: `/business/${businessId}`,
          method: "GET",
        };
      },
    }),
  }),
  overrideExisting: true,
});

export const { useGetBusinessListQuery, useGetBusinessByIdQuery } = servicesApi;
