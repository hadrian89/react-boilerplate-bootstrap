import { render, screen } from "@testing-library/react";
import Practice from "./Practice";

test("renders learn react link", () => {
  render(<Practice />);
  const linkElement = screen.getByText("Practice");
  expect(linkElement).toBeInTheDocument();
});
