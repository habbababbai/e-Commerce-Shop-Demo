import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Item } from "../../common/item";

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
        getAllProductCategories: builder.query<string[], string>({
            query: () => "products/categories",
        }),
        getAllProductsInCategory: builder.query<Item[], string>({
            query: (id) => `products/category/${id}`,
        }),
    }),
});

export const {
    useGetAllProductsQuery,
    useGetProductByIdQuery,
    useGetAllProductCategoriesQuery,
    useGetAllProductsInCategoryQuery,
} = shopApi;
