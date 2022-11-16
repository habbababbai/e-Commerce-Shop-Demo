import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Item } from "../../app/common/data";

export const shopApi = createApi({
    reducerPath: "shopApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
    endpoints: (builder) => ({
        getAllProducts: builder.query<Item[], string>({
            query: () => "products",
        }),
    }),
});

export const { useGetAllProductsQuery } = shopApi;
