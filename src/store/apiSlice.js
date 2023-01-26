import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { getTokenCookie } from "utils/tools";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://jsonplaceholder.typicode.com/",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    // const token = getState().auth.token;
    // const token = getTokenCookie();

    // if (token) {
    //   headers.set("Authorization", `Bearer ${token}`);
    // }
    return headers;
  },
});
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,

  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (init) => ({
        url: "/users",
        method: "POST",
        body: init,
      }),
    }),

    getUsers: builder.query({
      query: () => ({
        url: `/users`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUsersQuery, useCreateUserMutation } = apiSlice;
