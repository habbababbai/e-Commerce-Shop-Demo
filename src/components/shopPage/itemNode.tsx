import React from "react";
import "./itemNode.scss";
import { Link } from "react-router-dom";
import { Item } from "../../common/item";
import { addItem } from "../../features/localCart/localCart";
import { useAppDispatch } from "../../app/hooks";

export default function ItemNode(props: Item) {
    const itemId = `items/${props.id}`;
    const dispatch = useAppDispatch();
    return (
        <div className="item-node" key={props.id}>
            <h2>{props.title}</h2>
            <img src={props.image} alt={""}></img>
            <p>Price:{props.price}$</p>
            <p>Category: {props.category}</p>
            <Link to={itemId}>Details</Link>&nbsp;
            <button onClick={() => dispatch(addItem(props))}>
                Add to Cart
            </button>
        </div>
    );
}
