import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const ProductApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com'}),
    endpoints: (builder) => ({
        getAllProduct: builder.query({
            query: () => '/products'
        }),

        getProductById: builder.query({
            query: (id) => `/product/${id}`
        }),
        addNewProduct:builder.mutation({
            query: (newProduct) => ({
                url: '/products/add',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: newProduct
            })
            }),

            updateProduct: builder.mutation({
                query: ({id,updateProduct}) => ({
                    url: `/products/${id}`,
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: updateProduct
                })
            }),

                deleteProduct:builder.mutation({
                    query: (id) => ({
                        url: `/products/delete/${id}`,
                        method: 'DELETE',
                    })
                    }),
    })
});

export const {useGetAllProductQuery,useGetProductByIdQuery,useAddNewProductMutation,useUpdateProductMutation,useDeleteProductMutation} = ProductApi