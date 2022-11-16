import React from "react";
import { useGetAllProductsQuery } from "../../features/shopAPI/shopAPI";
import ItemNode from "./itemNode";

export default function Shop() {
    const { data, error, isLoading } = useGetAllProductsQuery("");

    return (
        <div>
            {data?.map((item) => {
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
