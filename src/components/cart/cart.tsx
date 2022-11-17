import "./cart.scss";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { CartNode } from "./cartNode";

export default function Cart() {
    const cartItems = useAppSelector((state) => state.localCart);

    return (
        <div>
            {cartItems.length > 0 ? (
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
                        />
                    );
                })
            ) : (
                <span>Your cart seems empty!</span>
            )}

            <p>
                <Link to="/">Go back</Link>
            </p>
        </div>
    );
}
