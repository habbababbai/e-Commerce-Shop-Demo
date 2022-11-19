import "./orderFormTextAreaInput";
import { useField } from "formik";

interface Props {
    label: string;
    name: string;
}

export default function OrderFormTextAreaInput(props: Props) {
    const [field, meta] = useField(props);

    return (
        <div>
            <label htmlFor={props.name}>{props.label}</label>
            <br></br>
            <textarea
                id={props.name}
                name={props.name}
                className="order-form-textarea"
            ></textarea>
        </div>
    );
}