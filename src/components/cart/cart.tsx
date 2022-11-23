import "./cart.scss";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { CartNode } from "./cartNode";
import Footer from "../footer/footer";

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
        <div className="cart-bg">
            <div className="cart-container navbar-offset">
                <div className="cart-items">
                    <h1 className="cart-header">Your Cart :</h1>
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
                    <div className="cart-summary">
                        <h1>Cart Summary : </h1>
                        {cartItems.map((item) => {
                            return (
                                <p key={item.id}>
                                    {item.title} x <b>{item.count}</b> :{" "}
                                    <b>{item.count * item.price} $</b>
                                </p>
                            );
                        })}
                    </div>
                    <h2>Total cart cost: {cost}$</h2>
                    <p>
                        <Link
                            to="/orderForm"
                            style={
                                isEmpty()
                                    ? { pointerEvents: "none", opacity: "0.4" }
                                    : {}
                            }
                        >
                            <button className="cart-button">Order</button>
                        </Link>
                    </p>
                    <p>
                        <Link to="/">
                            <button className="cart-button">
                                Go to Homepage
                            </button>
                        </Link>
                    </p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
