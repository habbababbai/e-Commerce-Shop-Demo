import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Item } from "../../common/data";

export const shopApi = createApi({
    reducerPath: "shopApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
    endpoints: (builder) => ({
        getAllProducts: builder.query<Item[], string>({
            query: () => "products",
        }),
        getProductById: builder.query<Item, string>({
            query: (id) => `products/${id}`,
        }),
    }),
});

export const { useGetAllProductsQuery, useGetProductByIdQuery } = shopApi;
