import "./orderForm.scss";
import { useAppSelector } from "../../app/hooks";
import OrderFormItemNode from "./orderFormItemNode";
import { Link } from "react-router-dom";
import ErrorPage from "../errorPage/errorPage";

export default function OrderForm() {
    const cartItems = useAppSelector((state) => state.localCart);

    function calculateCartCost() {
        return cartItems
            .reduce((sum, current) => current.price * current.count + sum, 0)
            .toFixed(2);
    }

    if (cartItems.length === 0) return <ErrorPage />;

    return (
        <div>
            <div className="cart-summary">
                <h1>Cart Summary:</h1>
                {cartItems.map((item) => {
                    return (
                        <OrderFormItemNode
                            key={item.id}
                            item={item}
                        ></OrderFormItemNode>
                    );
                })}
                <h2>Summed Price: {calculateCartCost()}$</h2>
            </div>
        </div>
    );
}
