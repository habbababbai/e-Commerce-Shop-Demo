import "./orderFormTextInput";
import { useField } from "formik";

interface Props {
    label: string;
    name: string;
}

export default function OrderFormTextInput(props: Props) {
    const [field, meta] = useField(props);
    return (
        <div>
            <label htmlFor={props.name}>{props.label}</label>
            <br></br>
            <input
                {...field}
                type="text"
                name={props.name}
                className="order-form-text"
            ></input>{" "}
            <br></br>
            {meta.error ? (
                <small className="alert alert-danger form-text text-muted">
                    {meta.error}
                </small>
            ) : null}
        </div>
    );
}
