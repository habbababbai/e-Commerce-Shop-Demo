import "./orderFormTextInput.scss";
import { useField } from "formik";

interface Props {
    label: string;
    name: string;
}

export default function OrderFormTextInput(props: Props) {
    const [field, meta] = useField(props);
    return (
        <div>
            <label className="order-form-label" htmlFor={props.name}>{props.label}</label>
            <br></br>
            <input
                {...field}
                type="text"
                name={props.name}
                className="order-form-text"
            ></input>{" "}
            <br></br>
            <small className="alert">
                {meta.error ? meta.error : <>&nbsp;</>}
            </small>
        </div>
    );
}
