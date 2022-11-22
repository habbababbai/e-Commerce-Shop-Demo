import "./navbar.scss";
import { Link } from "react-router-dom";
import homeIcon from "../../assets/icons8-home-page-48.png";
import cartIcon from "../../assets/icons8-shopping-cart-60.png";
import { NavbarButton } from "./navbarButton";
import { NavbarMenu } from "./navbarMenu";
import { useState } from "react";

export default function Navbar() {
    const [checked, setChecked] = useState(false);

    return (
        <div className="navbar">
            <NavbarButton
                checked={checked}
                onclick={() => setChecked(!checked)}
            ></NavbarButton>
            <Link
                onClick={() => setChecked(false)}
                className="homeButton"
                to="/"
            >
                <img src={homeIcon} alt={""}></img>
            </Link>
            <Link onClick={() => setChecked(false)} to="cart">
                <img src={cartIcon} alt={""}></img>
            </Link>
            {checked ? (
                <NavbarMenu onClickFn={() => setChecked(false)}></NavbarMenu>
            ) : null}
        </div>
    );
}
