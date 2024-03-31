import { render, screen } from "@testing-library/react";
import Login, { validateEmail } from "../Login";

describe("Test Login Component", () => {
    test("render form with 1 button", async () => {
        render(<Login />);
        const buttonList = await screen.findAllByRole("button");
        expect(buttonList).toHaveLength(1);
    });
    test("should be failed on email validation", () => {
        const testEmail = "shincode.com";
        expect(validateEmail(testEmail)).not.toBe(true);
    });
    test("should be successes on email validation", () => {
        const testEmail = "shincode@gamil.com";
        expect(validateEmail(testEmail)).toBe(true);
    });

    test("password input should have type password" , () => {
        render(<Login />)
        const password = screen.getByPlaceholderText("パスワード入力");
        expect(password).toHaveAttribute("type" , "password");
    });
    
});