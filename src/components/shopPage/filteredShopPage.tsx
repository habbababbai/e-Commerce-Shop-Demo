import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetAllProductsInCategoryQuery } from "../../features/shopAPI/shopAPI";
import { Item } from "../../common/item";
import ItemNode from "./itemNode";
import ErrorPage from "../errorPage/errorPage";

export default function FilteredShopPage() {
    const { id } = useParams();
    const { data, error, isLoading } = useGetAllProductsInCategoryQuery(
        id as string
    );

    if (isLoading) return <div>...Loading</div>;

    if (error || data?.length === 0) return <ErrorPage />;

    return (
        <div className="shop-container navbar-offset">
            <h1>{`${id?.charAt(0).toUpperCase()}${id?.slice(1)}`}</h1>
            {data?.map((item: Item) => {
                return (
                    <ItemNode
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        category={item.category}
                        image={item.image}
                        description={item.description}
                    ></ItemNode>
                );
            })}
        </div>
    );
}
