import React from "react";
import { Item } from "../../common/item";
import { useGetAllProductsQuery } from "../../features/shopAPI/shopAPI";
import ItemNode from "./itemNode";

export default function Shop() {
    const { data, error, isLoading } = useGetAllProductsQuery("");

    if (isLoading) return <div>...Loading</div>;

    if (error) return <div>Error occured!</div>;

    return (
        <div className="shop-container">
            <div>
                <h1>Welcome to my demo store!</h1>
                <h3>
                    This store is using data from{" "}
                    <a href="https://fakestoreapi.com/">Fake Store API</a>
                </h3>
            </div>
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
