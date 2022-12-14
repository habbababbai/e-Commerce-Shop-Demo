import "./thankYouPage.scss";
import { Link } from "react-router-dom";
import Footer from "../footer/footer";

export default function ThankYouPage() {
    return (
        <div className="thank-you-bg navbar-offset">
            <div className="thank-you-container">
                <h1>Thank you for your order!</h1>
                <p>
                    Additional information about your order will be sent by
                    e-mail
                </p>
                <p>Click below to go back to homepage</p>
                <Link to="/">
                    <button className="thank-you-button">Homepage</button>
                </Link>
            </div>
            <Footer></Footer>
        </div>
    );
}
