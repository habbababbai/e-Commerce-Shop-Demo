import "./orderForm.scss";
import { useAppSelector } from "../../redux/hooks";
import OrderFormItemNode from "./orderFormItemNode";
import { Link } from "react-router-dom";
import ErrorPage from "../errorPage/errorPage";
import { Formik, Field, Form } from "formik";
import OrderFormTextInput from "./orderFormTextInput";
import OrderFormTextAreaInput from "./orderFormTextAreaInput";
import OrderFormSelectInput from "./orderFormSelectInput";
import { countryList } from "../../common/countryList";
import {
    nameRegex,
    phoneNumberRegex,
    stNumberRegex,
} from "../../common/regexes";
import * as Yup from "yup";

const countryListExtended = countryList;
countryListExtended.unshift("-");

export default function OrderForm() {
    const cartItems = useAppSelector((state) => state.localCart);

    function calculateCartCost() {
        return cartItems
            .reduce((sum, current) => current.price * current.count + sum, 0)
            .toFixed(2);
    }

    if (cartItems.length === 0) return <ErrorPage />;

    return (
        <div>
            <div className="cart-summary">
                <h1>Cart Summary:</h1>
                {cartItems.map((item) => {
                    return (
                        <OrderFormItemNode
                            key={item.id}
                            item={item}
                        ></OrderFormItemNode>
                    );
                })}
                <h2>Summed Price: {calculateCartCost()}$</h2>
            </div>
            <div className="order-form">
                <Formik
                    initialValues={{
                        firstname: "",
                        lastname: "",
                        mail: "",
                        phone: "",
                        country: "-",
                        city: "",
                        street: "",
                        stnumber: "",
                        comment: "",
                    }}
                    validationSchema={Yup.object({
                        firstname: Yup.string()
                            .min(2, "Name must have at least 2 characters")
                            .max(40, "Name can have no more than 40 characters")
                            .matches(nameRegex, "Invalid format")
                            .required("Field required"),
                        lastname: Yup.string()
                            .min(2, "Last name must have at least 2 characters")
                            .max(40, "Name can have no more than 40 characters")
                            .matches(nameRegex, "Invalid format")
                            .required("Field required"),
                        mail: Yup.string().email("Invalid e-mail format"),
                        phone: Yup.string().matches(
                            phoneNumberRegex,
                            "Invalid phone number format"
                        ),
                        country: Yup.string().oneOf(
                            countryList,
                            "Please select a country"
                        ),
                        city: Yup.string()
                            .min(2, "City must have at least 2 characters")
                            .max(60, "City can have no more than 60 characters")
                            .matches(nameRegex, "Invalid format")
                            .required("Field required"),
                        street: Yup.string()
                            .min(2, "Street must have at least 2 characters")
                            .max(
                                80,
                                "Street can have no more than 80 characters"
                            )
                            .matches(nameRegex, "Invalid format")
                            .required("Field required"),
                        stnumber: Yup.string()
                            .min(
                                1,
                                "Street number must have at least 1 character"
                            )
                            .max(
                                6,
                                "Street number can have no more than 6 characters"
                            )
                            .matches(stNumberRegex, "Invalid format")
                            .required("Field required"),
                    })}
                    onSubmit={(values) => console.log(values)}
                >
                    <Form className="formik">
                        <OrderFormTextInput
                            label="First name: "
                            name="firstname"
                        ></OrderFormTextInput>
                        <OrderFormTextInput
                            label="Last name: "
                            name="lastname"
                        ></OrderFormTextInput>
                        <OrderFormTextInput
                            label="E-mail:"
                            name="mail"
                        ></OrderFormTextInput>
                        <OrderFormTextInput
                            label="Phone number: "
                            name="phone"
                        ></OrderFormTextInput>
                        <OrderFormSelectInput
                            label="Country: "
                            name="country"
                            options={countryListExtended}
                        ></OrderFormSelectInput>
                        <OrderFormTextInput
                            label="City: "
                            name="city"
                        ></OrderFormTextInput>
                        <OrderFormTextInput
                            label="Street: "
                            name="street"
                        ></OrderFormTextInput>
                        <OrderFormTextInput
                            label="St. Number: "
                            name="stnumber"
                        ></OrderFormTextInput>
                        <OrderFormTextAreaInput
                            label="Add comment to your order: "
                            name="comment"
                        ></OrderFormTextAreaInput>
                        <p>
                            Place order for: <b>{calculateCartCost()}$</b>
                        </p>
                        <button type="submit">Place Order</button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}
