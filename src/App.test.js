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

// test("button turn blue when clicked", () => {
//   render(<App/>)
//   const colorButton = screen.getByRole('button', {name: "Change to blue"})
// });
