import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { logRoles } from "@testing-library/react";
test("button has correct initial color, and update when Clicked", () => {
  const { container } = render(<App />);
  logRoles(container);
  // 버튼 초기 여부
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  // 백그라운드 레드로 변경
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // Click Button
  fireEvent.click(colorButton);

  // colorButton backGround Change
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  // colorButton text Change
  expect(colorButton).toHaveTextContent("Change to red");
});

test("initial conditions", () => {
  render(<App />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("button able", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button");

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});
