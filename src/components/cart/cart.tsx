import "./cart.scss";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { CartNode } from "./cartNode";

export default function Cart() {
    const cartItems = useAppSelector((state) => state.localCart);
    const cost = calculateCartCost();

    function calculateCartCost() {
        if (cartItems) {
            return cartItems
                .reduce(
                    (sum, current) => current.price * current.count + sum,
                    0
                )
                .toFixed(2);
        }
    }
    function isEmpty() {
        return cartItems.length === 0;
    }

    return (
        <div className="navbar-offset">
            {!isEmpty() ? (
                cartItems.map((item) => {
                    return (
                        <CartNode
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            category={item.category}
                            description={item.description}
                            image={item.image}
                            count={item.count}
                        />
                    );
                })
            ) : (
                <span>Your cart seems empty!</span>
            )}
            <div>
                {cartItems.map((item) => {
                    return (
                        <p key={item.id}>
                            {item.title} x {item.count} :{" "}
                            {item.count * item.price} $
                        </p>
                    );
                })}
            </div>
            <p>
                <b>Total cart cost: {cost}$</b>
            </p>
            <p>
                <Link
                    to="/orderForm"
                    style={
                        isEmpty()
                            ? { pointerEvents: "none", opacity: "0.4" }
                            : {}
                    }
                >
                    Order
                </Link>
            </p>
            <p>
                <Link to="/">Go to Homepage</Link>
            </p>
        </div>
    );
}
