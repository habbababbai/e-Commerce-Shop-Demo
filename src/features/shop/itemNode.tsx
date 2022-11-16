import React from "react";
import "./itemNode.scss";

interface Props {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
}

export default function ItemNode(props: Props) {
    return (
        <div className="itemNode" key={props.id}>
            <h2>{props.title}</h2>
            <img src={props.image} alt={""}></img>
            <p>Price:{props.price}$</p>
            <p>Category: {props.category}</p>
        </div>
    );
}
