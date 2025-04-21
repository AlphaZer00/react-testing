import { render, screen } from "@testing-library/react";
import App from "./App";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";

describe("App component", () => {
    it("renders Magnificent Monkeys", () => {
        const { container } = render(<App />);
        expect(container).toMatchSnapshot();
    });

    it("renders radical rhinos after button click", async () => {
        const user = userEvent.setup();

        render(<App />);
        const button = screen.getByRole("button", { name: "Click here" });

        await user.click(button);

        expect(screen.getByRole("heading").textContent).toMatch(
            /Radical Rhinos/i
        );
    });
});
