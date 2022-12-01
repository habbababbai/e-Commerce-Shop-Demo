import "./navbarMenu.scss";
import { useGetAllProductCategoriesQuery } from "../../features/shopAPI/shopAPI";
import { Link } from "react-router-dom";

interface Props {
    onClickFn(): void;
}

export function NavbarMenu(props: Props) {
    const { data, error, isLoading } = useGetAllProductCategoriesQuery("");

    return (
        <ul className="navbar-menu" role="menu">
            <li>
                <Link
                    onClick={() => props.onClickFn()}
                    className="navbar-menu-element"
                    to="/"
                    role={"menuitem"}
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    onClick={() => props.onClickFn()}
                    className="navbar-menu-element"
                    to="/cart"
                >
                    Cart
                </Link>
            </li>
            {isLoading ? (
                <li>...Loading</li>
            ) : error ? (
                <li>Error occured!</li>
            ) : (
                data?.map((item: string) => {
                    const categoryId = `category/${item}`;
                    return (
                        <li key={item}>
                            <Link
                                onClick={() => props.onClickFn()}
                                to={categoryId}
                                className="navbar-menu-element"
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </Link>
                        </li>
                    );
                })
            )}
        </ul>
    );
}
