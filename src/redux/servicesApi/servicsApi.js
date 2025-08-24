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
    sendMessage: builder.mutation({
      query: ({ data, businessId }) => {
        return {
          url: `/business/message/${businessId}`, // Note: API endpoint uses businessId
          method: "POST",
          body: data,
        };
      },
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetBusinessListQuery,
  useGetBusinessByIdQuery,
  useSendMessageMutation,
} = servicesApi;
