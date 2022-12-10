import ThankYouPage from "./thankYouPage";
import { createMemoryHistory } from "history";
import { Router, Routes, Route } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";

const history = createMemoryHistory({
    initialEntries: [`/thankYouPage`],
});
history.push = jest.fn();

function TestComponent() {
    return (
        <Router location={history.location} navigator={history}>
            <Routes>
                <Route path="/thankYouPage" element={<ThankYouPage />} />
            </Routes>
        </Router>
    );
}

describe("thank you page", () => {
    test("displays text", () => {
        render(<TestComponent />);
        const header = screen.getByText("Thank you for your order!");
        expect(header).toBeInTheDocument();
        const text = screen.getByText("Click below to go back to homepage");
        expect(text).toBeInTheDocument();
        const button = screen.getByText("Homepage");
        expect(button).toBeInTheDocument();
    });
});
test("navigate to homepage", () => {
    render(<TestComponent />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(history.push).toHaveBeenCalledTimes(1);
    expect(history.push).toBeCalledWith(
        { hash: "", pathname: "/", search: "" },
        undefined,
        {
            preventScrollReset: undefined,
            relative: undefined,
            replace: false,
            state: undefined,
        }
    );
});
