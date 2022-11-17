import "./itemPage.scss";
import { useParams, Link } from "react-router-dom";
import { useGetProductByIdQuery } from "../../features/shopAPI/shopAPI";

export default function ItemPage() {
    const { id } = useParams();
    const { data, error, isLoading } = useGetProductByIdQuery(id as string);

    if (isLoading) return <div>Loading...</div>;

    if (error)
        return (
            <div>Sorry! Error has occured, please try reloading website</div>
        );

    return (
        <div className="itemPage">
            <h2>{data?.title}</h2>
            <img src={data?.image} alt={""}></img>
            <h3>Price: {data?.price}$</h3>
            <h3>Category: {data?.category}</h3>
            <p>
                Product Description: <br></br>
                {data?.description}
            </p>
            <p>
                <Link to="/">Go home</Link>
            </p>
        </div>
    );
}
