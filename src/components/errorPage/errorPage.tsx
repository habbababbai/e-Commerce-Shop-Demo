import "./errorPage.scss";
import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <div>
            <h1>Sorry, something went wrong!</h1>
            <p>Press button below to go to homepage</p>
            <Link to="/">Homepage</Link>
        </div>
    );
}
