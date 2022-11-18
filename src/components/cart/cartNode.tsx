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
            <p>Price:{props.price}$</p>
            <p>Category: {props.category}</p>
            <p>
                Description: <br></br>
                {props.description}
            </p>
            <Link to={itemId}>Details</Link> <br></br>
            <Counter
                value={props.count}
                increment={() => dispatch(incrementItemCount(props))}
                decrement={() => dispatch(decrementItemCount(props))}
            ></Counter>
            <button onClick={() => dispatch(removeItem(props))}>
                Remove from Cart
            </button>
        </div>
    );
}
