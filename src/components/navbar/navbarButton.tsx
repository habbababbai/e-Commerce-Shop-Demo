import "./navbarButton.scss";

interface Props {
    checked: boolean;
    onclick(): void;
}

export function NavbarButton(props: Props) {
    return (
        <div className="navbar-button-wrapper">
            <input
                type="checkbox"
                name="toggle"
                className="toggle"
                checked={props.checked}
                onChange={() => props.onclick()}
            ></input>
            <label
                className="navbar-button"
                htmlFor="toggle"
                onClick={() => props.onclick()}
            >
                <span></span>
                <span></span>
                <span></span>
            </label>
        </div>
    );
}
