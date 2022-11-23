import "./errorPage.scss";
import { Link } from "react-router-dom";
import Footer from "../footer/footer";

export default function ErrorPage() {
    return (
        <div className="error-bg navbar-offset">
            <div className="error-container">
                <h1>Sorry, something went wrong!</h1>
                <p>Press button below to go to homepage</p>
                <Link to="/">
                    <button className="error-button">Homepage</button>
                </Link>
            </div>
            <Footer></Footer>
        </div>
    );
}
