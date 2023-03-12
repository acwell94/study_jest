import { render, screen } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);
  // 버튼 초기 여부
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  // 백그라운드 레드로 변경
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("button turn blue when clicked", () => {});
