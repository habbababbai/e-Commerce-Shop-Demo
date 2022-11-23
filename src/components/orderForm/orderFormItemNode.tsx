import "./orderFormItemNode.scss";
import React from "react";
import { ExtendedItem } from "../../common/item";

interface Props {
    item: ExtendedItem;
}

export default function OrderFormItemNode(props: Props) {
    return (
        <div className="order-form-item">
            <img src={props.item.image} alt={""}></img>
            <div className="order-form-item-desc">
                <span>{props.item.title}</span>
                <br></br>
                <span>
                    <b>{props.item.price}$</b> x <b>{props.item.count}</b> ={" "}
                    <b>{props.item.count * props.item.price}$</b>
                </span>
            </div>
        </div>
    );
}
