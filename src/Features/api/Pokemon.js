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
        }),

        getPostById: builder.query({
            query: (id) => ({
                url: `posts/${id}`,
                method: 'GET'
            }),
            onError: (error) => {
                console.log("Error fetching during getDataById : ", error);
            }
        }),

        getPostByLimit: builder.query({
            query: (num) => {
                console.log('data limit: ', num);
                return {
                    url: `posts?_limit=${num}`,
                    method: 'GET'
                }
            },
            onError: (error) => {
                console.log("Error fetching during getDataById : ", error);
            }
        }),

        //   InDelete Query are two thing one is Callback function(pass the data) and other is object

        deletePost: builder.mutation({
            query: (id) => {
                console.log('data limit: ', id);
                return {
                    url: `posts/${id}`,
                    method: 'DELETE'
                }
            },
            onError: (error) => {
                console.log("Error fetching during deletePost : ", error);
            }
        }),


        createPost: builder.mutation({
            query: () => {
                return {
                    url: `posts`,
                    method: 'POST',
                    body: {
                        title: "This is new data.",
                        body: "This is new body.",
                        userId: 1,
                    },
                    header: {
                        'Content-type': 'application/json; charset=UFT-8'
                    }
                }
            },
            onError: (error) => {
                console.log("Error fetching during creating post : ", error);
            }
        }),

    }),
})


export const {
    useGetAllPostsQuery,
    useGetPostByIdQuery,
    useGetPostByLimitQuery,
    useDeletePostMutation,
    useCreatePostMutation
} = pokemonApi;