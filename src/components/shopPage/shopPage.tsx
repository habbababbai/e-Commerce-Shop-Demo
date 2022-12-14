import React from "react";
import "./shopPage.scss";
import bg from "../../assets/pexels-alex-conchillos-3745234.jpg";
import { Item } from "../../common/item";
import { useGetAllProductsQuery } from "../../features/shopAPI/shopAPI";
import ItemNode from "./itemNode";
import Footer from "../footer/footer";
import Loading from "../loading/loading";

export default function ShopPage() {
    const { data, error, isLoading } = useGetAllProductsQuery("");

    if (isLoading) return <Loading />;

    if (error) return <div>Error occured!</div>;

    return (
        <div className="shop-container navbar-offset">
            <div
                className="shop-header"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <h1>Welcome!</h1>
                <h2>This is my demo store</h2>
                <h4>
                    This store is using data from{" "}
                    <a href="https://fakestoreapi.com/">Fake Store API</a>
                    <br />
                    Source code for this site can be found{" "}
                    <a href="https://github.com/habbababbai/e-Commerce-Shop-Demo">
                        here
                    </a>
                </h4>
            </div>
            <div className="items-bg">
                <div className="items-container">
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
            </div>
            <Footer></Footer>
        </div>
    );
}
