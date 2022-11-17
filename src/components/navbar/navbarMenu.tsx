import "./navbarMenu.scss";
import { useGetAllProductCategoriesQuery } from "../../features/shopAPI/shopAPI";
import { Link } from "react-router-dom";

interface Props {
    onClickFn(): void;
}

export function NavbarMenu(props: Props) {
    const { data, error, isLoading } = useGetAllProductCategoriesQuery("");

    return (
        <div className="navbar-menu">
            <p>
                <Link
                    onClick={() => props.onClickFn()}
                    className="navbar-menu-element"
                    to="/"
                >
                    Home
                </Link>
            </p>
            <p>
                <Link
                    onClick={() => props.onClickFn()}
                    className="navbar-menu-element"
                    to="/cart"
                >
                    Cart
                </Link>
            </p>
            {isLoading ? (
                <div>...Loading</div>
            ) : error ? (
                <div>Error occured!</div>
            ) : (
                data?.map((item: string) => {
                    const categoryId = `category/${item}`;
                    return (
                        <p key={item}>
                            <Link
                                onClick={() => props.onClickFn()}
                                to={categoryId}
                                className="navbar-menu-element"
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </Link>
                        </p>
                    );
                })
            )}
        </div>
    );
}
