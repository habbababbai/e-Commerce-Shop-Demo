import "./orderFormTextAreaInput.scss";
import { useField } from "formik";

interface Props {
    label: string;
    name: string;
}

export default function OrderFormTextAreaInput(props: Props) {
    const [field, meta] = useField(props);

    return (
        <div>
            <label className="order-form-label" htmlFor={props.name}>{props.label}</label>
            <br></br>
            <textarea
                value={meta.value}
                onChange={field.onChange}
                id={props.name}
                name={props.name}
                className="order-form-textarea"
            ></textarea>
            <br></br>
            <small className="alert">
                {meta.error ? meta.error : <>&nbsp;</>}
            </small>
        </div>
    );
}
