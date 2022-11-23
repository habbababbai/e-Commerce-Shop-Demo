import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Item } from "../../common/item";

// reducer slice allowing us to fetch data from https://fakestoreapi.com/

export const shopApi = createApi({
    reducerPath: "shopApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
    endpoints: (builder) => ({
        getAllProducts: builder.query<Item[], string>({
            query: () => "/products",
        }),
        getProductById: builder.query<Item, string>({
            query: (id) => `products/${id}`,
        }),
        getAllProductCategories: builder.query<string[], string>({
            query: () => "products/categories",
        }),
        getAllProductsInCategory: builder.query<Item[], string>({
            query: (id) => `products/category/${id}`,
        }),
    }),
});

// queries available by API
export const {
    useGetAllProductsQuery,
    useGetProductByIdQuery,
    useGetAllProductCategoriesQuery,
    useGetAllProductsInCategoryQuery,
} = shopApi;
