import { render, screen } from "@testing-library/react";
import Footer from "./footer";

describe("footer", () => {
    test("display text", () => {
        render(<Footer />);
        const name = screen.getByText("habbababbai");
        const icons = screen.getByText("Icons8");
        expect(name).toBeInTheDocument();
        expect(icons).toBeInTheDocument();
    });
});
