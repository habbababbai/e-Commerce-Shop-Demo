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
    test("have proper url", () => {
        render(<Footer />);
        const myLink = screen.getByText("habbababbai");
        expect(myLink).toHaveAttribute(
            "href",
            "https://github.com/habbababbai"
        );
        const icons8Link = screen.getByText("Icons8");
        expect(icons8Link).toHaveAttribute("href", "https://icons8.com/");
    });
});
