import React, { useEffect } from "react";
import { useGetAllProductsQuery } from "./shopCreateAPI";
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
                    ></ItemNode>
                );
            })}
        </div>
    );
}
