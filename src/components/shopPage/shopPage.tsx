import React from "react";
import { Item } from "../../common/item";
import { useGetAllProductsQuery } from "../../features/shopAPI/shopAPI";
import ItemNode from "./itemNode";

export default function Shop() {
    const { data, error, isLoading } = useGetAllProductsQuery("");

    return (
        <div className="shop-container">
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
