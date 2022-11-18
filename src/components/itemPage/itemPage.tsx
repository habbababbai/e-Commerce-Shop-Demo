import "./itemPage.scss";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useGetProductByIdQuery } from "../../features/shopAPI/shopAPI";
import { useAppDispatch } from "../../app/hooks";
import { addItem } from "../../features/localCart/localCart";
import { ExtendedItem } from "../../common/item";
import { Counter } from "../counter/counter";

export default function ItemPage() {
    const { id } = useParams();
    const { data, error, isLoading } = useGetProductByIdQuery(id as string);
    const dispatch = useAppDispatch();
    const [counter, setCounter] = useState(1);

    function increment() {
        if (counter + 1 <= 20) setCounter(counter + 1);
    }
    function decrement() {
        if (counter - 1 > 0) setCounter(counter - 1);
    }

    if (isLoading) return <div>Loading...</div>;

    if (error)
        return (
            <div>Sorry! Error has occured, please try reloading website</div>
        );

    return (
        <div className="item-page">
            <h2>{data?.title}</h2>
            <img src={data?.image} alt={""}></img>
            <h3>Price: {data?.price}$</h3>
            <h3>Category: {data?.category}</h3>
            <p>
                Product Description: <br></br>
                {data?.description}
            </p>
            <div>
                <Counter
                    value={counter}
                    increment={increment}
                    decrement={decrement}
                ></Counter>
                <button onClick={() => dispatch(addItem(data as ExtendedItem))}>
                    Add to Cart
                </button>
            </div>
            <p>
                <Link to="/">Go home</Link>
            </p>
        </div>
    );
}
