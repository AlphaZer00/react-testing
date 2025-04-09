import { render, screen } from "@testing-library/react";
import App from "./App";
import { describe, it, expect } from "vitest";

describe("App component", () => {
    it("renders heading correctly", () => {
        render(<App />);
        expect(screen.getByRole("heading").textContent).toMatch(/First Test/i);
    });
});
