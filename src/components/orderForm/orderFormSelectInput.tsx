import "./orderFormSelectInput.scss";
import { useField } from "formik";

interface Props {
    label: string;
    name: string;
    options: string[];
}

export default function OrderFormSelectInput(props: Props) {
    const [field, meta] = useField(props);

    return (
        <div>
            <label htmlFor={props.name}>{props.label}</label>
            <br></br>
            <select {...field} name={props.name}>
                {props.options.map((option, index) => {
                    return (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    );
                })}
            </select>
            <br></br>
            <small className="alert">
                {meta.error ? meta.error : <>&nbsp;</>}
            </small>
        </div>
    );
}
