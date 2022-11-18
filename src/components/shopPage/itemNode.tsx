import "./itemNode.scss";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Item } from "../../common/item";
import { addItem } from "../../features/localCart/localCart";
import { useAppDispatch } from "../../app/hooks";
import { useAppSelector } from "../../app/hooks";
import { Counter } from "../counter/counter";

export default function ItemNode(props: Item) {
    const [counter, setCounter] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);

    const itemId = `/items/${props.id}`;
    const dispatch = useAppDispatch();

    function increment() {
        if (counter + 1 <= 20) setCounter(counter + 1);
    }
    function decrement() {
        if (counter - 1 > 0) setCounter(counter - 1);
    }

    function handleButtonClick() {
        dispatch(addItem({ ...props, count: counter }));
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
    }

    return (
        <div className="item-node" key={props.id}>
            <h2>{props.title}</h2>
            <img src={props.image} alt={""}></img>
            <p>Price:{props.price}$</p>
            <p>Category: {props.category}</p>
            <Link to={itemId}>Details</Link>&nbsp;
            <button onClick={() => handleButtonClick()}>Add to Cart</button>
            <Counter
                value={counter}
                increment={increment}
                decrement={decrement}
            ></Counter>
            <div className="add-success-monit">
                {showSuccess ? <span>Succesfully added items!</span> : null}
            </div>
        </div>
    );
}
