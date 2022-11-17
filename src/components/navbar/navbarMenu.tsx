import "./navbarMenu.scss";
import { useGetAllProductCategoriesQuery } from "../../features/shopAPI/shopAPI";
import { Link } from "react-router-dom";

export function NavbarMenu() {
    const { data, error, isLoading } = useGetAllProductCategoriesQuery("");
    return (
        <div className="navbar-menu">
            {data?.map((item: string) => {
                const categoryId = `category/${item}`;
                return (
                    <p key={item}>
                        <Link to={categoryId}>{item}</Link>
                    </p>
                );
            })}
        </div>
    );
}
