import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { apiRoutes, BASE_URL } from '../config/configApi'

export const worksApi = createApi({
  reducerPath: 'worksApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getSomeWorks: builder.query({
      query: (no) => no? `${apiRoutes.getSomeWorks}${no}`:apiRoutes.getAllWorks,
      transformResponse: (response:any) => response.payload.data
    }),
  }),
})


export const { useGetSomeWorksQuery} = worksApi;