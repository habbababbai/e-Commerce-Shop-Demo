import "./navbarMenu.scss";
import { useGetAllProductCategoriesQuery } from "../../features/shopAPI/shopAPI";

export function NavbarMenu() {
    const { data, error, isLoading } = useGetAllProductCategoriesQuery("");
    return (
        <div className="navbar-menu">
            {data?.map((item: string) => {
                return <p key={item}>{item}</p>;
            })}
        </div>
    );
}
