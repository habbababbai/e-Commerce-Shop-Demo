import React from "react";
import "./itemNode.scss";
import { Link } from "react-router-dom";
import ItemPage from "../itemPage/itemPage";

interface Props {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
    description: string;
}

export default function ItemNode(props: Props) {
    const itemId = `items/${props.id}`;
    return (
        <div className="itemNode" key={props.id}>
            <h2>{props.title}</h2>
            <img src={props.image} alt={""}></img>
            <p>Price:{props.price}$</p>
            <p>Category: {props.category}</p>
            <Link to={itemId}>Details</Link>
        </div>
    );
}
