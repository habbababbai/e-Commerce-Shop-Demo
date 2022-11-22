import "./thankYouPage.scss";
import { Link } from "react-router-dom";

export default function ThankYouPage() {
    return (
        <div>
            <h1>Thank you for you order!</h1>
            <p>
                Additional information about your order will be sent by e-mail
            </p>
            <Link to="/">Click here to go back to homepage</Link>
        </div>
    );
}
