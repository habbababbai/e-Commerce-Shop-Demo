import { useParams, Link } from "react-router-dom";
import { useGetProductByIdQuery } from "../../features/shopAPI/shopAPI";

export default function ItemPage() {
    const { id } = useParams();
    const { data, error, isLoading } = useGetProductByIdQuery(id as string);

    return (
        <div>
            <h1>{data?.title}</h1>
            <Link to="/">Go home</Link>
        </div>
    );
}
