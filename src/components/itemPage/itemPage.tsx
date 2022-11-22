import "./itemPage.scss";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useGetProductByIdQuery } from "../../features/shopAPI/shopAPI";
import { useAppDispatch } from "../../redux/hooks";
import { addItem } from "../../features/localCart/localCart";
import { Item } from "../../common/item";
import { Counter } from "../counter/counter";
import ErrorPage from "../errorPage/errorPage";

export default function ItemPage() {
    const { id } = useParams();
    const { data, error, isLoading } = useGetProductByIdQuery(id as string);
    const dispatch = useAppDispatch();
    const [counter, setCounter] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);

    function increment() {
        if (counter + 1 <= 20) setCounter(counter + 1);
    }
    function decrement() {
        if (counter - 1 > 0) setCounter(counter - 1);
    }

    function handleButtonClick() {
        dispatch(addItem({ ...(data as Item), count: counter }));
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
    }

    if (isLoading) return <div>Loading...</div>;

    if (error || !data) return <ErrorPage />;

    return (
        <div className="item-page navbar-offset">
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
                <button
                    disabled={showSuccess}
                    onClick={() => handleButtonClick()}
                >
                    Add to Cart
                </button>
            </div>
            <div className="add-success-monit">
                {showSuccess ? <span>Succesfully added items!</span> : null}
            </div>
            <p>
                <Link to="/">Go home</Link>
            </p>
        </div>
    );
}
