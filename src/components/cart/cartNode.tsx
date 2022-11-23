import "./cartNode.scss";
import { Link } from "react-router-dom";
import { ExtendedItem } from "../../common/item";
import { useAppDispatch } from "../../redux/hooks";
import {
    incrementItemCount,
    decrementItemCount,
    removeItem,
} from "../../features/localCart/localCart";
import { Counter } from "../counter/counter";

export function CartNode(props: ExtendedItem) {
    const dispatch = useAppDispatch();
    const itemId = `/items/${props.id}`;
    return (
        <div className="cart-node">
            <h2>{props.title}</h2>
            <img src={props.image} alt={""}></img>
            <p>
                Price : <b>{props.price} $</b>
            </p>
            <p>
                Category: <b>{props.category}</b>
            </p>
            <div>
                <p>
                    <b>Description:</b>
                </p>
                <p className="cart-description">{props.description}</p>
            </div>
            <Link to={itemId}>
                <button className="cart-node-button">Details</button>
            </Link>{" "}
            <br></br>
            <p>
                Total Cost : <b>{(props.price * props.count).toFixed(2)} $</b>
            </p>
            <Counter
                value={props.count}
                increment={() => dispatch(incrementItemCount(props))}
                decrement={() => dispatch(decrementItemCount(props))}
            ></Counter>
            <button
                className="cart-node-button"
                onClick={() => dispatch(removeItem(props))}
            >
                Remove
            </button>
            <div className="cart-bottom-bar">&nbsp;</div>
        </div>
    );
}
