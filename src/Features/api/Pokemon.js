// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
    reducerPath: "pokemonApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: (builder) => ({
        getAllPosts: builder.query({
            query: () => ({
                url: 'posts',
                method: 'GET'
            }),
            onError: (error) => {
                console.error('Error fetching all posts:', error)
            }
        })
    })
})


export const { useGetAllPostsQuery } = pokemonApi;